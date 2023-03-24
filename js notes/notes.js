window.addEventListener("beforeunload",checkDB);

let mainView = document.querySelector('.mainView');
let notesView = document.querySelector('.notes-view');
let addNotesView = document.querySelector('.addNoteView');
let titleInput = document.querySelector('input[name="title"]');
let dateInput = document.querySelector('input[name="date"]')
let timeInput = document.querySelector('input[name="time"]')
let textAreaInput = document.querySelector('textarea[name="text-area"]')
let searchInput = document.querySelector('input[type="search"]');
let addNoteBtn = document.querySelector('#add-note');
let saveBtn = document.querySelector('#save-btn');

function showView() {
  mainView.style.display = "block";
  addNotesView.style.display = "none";
};

function dodajShowView() {
  addNotesView.style.display = "block";
  mainView.style.display = "none";
}

function notesAdd() {
  notes.push({
    title: titleInput.value.toLowerCase(),
    date: dateInput.value,
    time: timeInput.value,
    description: textAreaInput.value,
    opacity: 1,
    done: "Uradjeno",
    delete: "Obrisati",
  });
  console.log(notes);
  titleInput.value = "",
    dateInput.value = "",
    timeInput.value = "",
    textAreaInput.value = ""
  createTable();
  showView();
};

function searchNote() {
 let term = this.value.toLowerCase();
 let filtArr = notes.filter( note => {
  if(note.title.indexOf(term) > -1){
    return true;
  }else{
    return false;
  }
 })
createTable(filtArr);
}

notesView.addEventListener('click', showView);
addNoteBtn.addEventListener('click', dodajShowView);
saveBtn.addEventListener("click", notesAdd);
searchInput.addEventListener("keyup",searchNote);

createTable();
function createTable(filtArr = notes) {
  let text = '';
  filtArr.forEach((note,index) => {
    text += `
    <div class="col-4 py-5 m-3">
    <div class="card" style="opacity:${note.opacity}">
    <div class="card-header text-center py-3">
        <h3>${note.title}</h3>
    </div>
    <div class="card-header">
        <div class="col-5">
            <button class="btn btn-info form-control disabled">${note.date}</button>
        </div>
        <div class="col-5">
            <button class="btn btn-info form-control disabled">${note.time}</button>
        </div>
    </div>
    <div class="card-body">
        <p class="card-text py-4">${note.description}</p>
    </div>
    <div class="card-footer calc-2 py-3">
      <div class="col-5">
        <button class="btn btn-danger form-control" data-id="${index}" id="done">${note.done}</button>
      </div>
      <div class="col-5">
        <button class="btn btn-info form-control" data-id="${index}" id="delete">${note.delete}</button>
      </div>
    </div>
    </div>
  </div>`
  });
  mainView.innerHTML = text;
  addEvenetListeners();
}

function addEvenetListeners() {
let doneBtn = document.querySelectorAll("#done");
let deleteBtn = document.querySelectorAll("#delete");
for (let i = 0; i < doneBtn.length; i++) {
    doneBtn[i].addEventListener("click",markAll);
    deleteBtn[i].addEventListener("click",deleteNote);
}
}

function markAll () {
 let id = this.getAttribute("data-id");
  if(notes[id].opacity == "1") {
    notes[id].opacity = "0.3";
    createTable();
  }else {
    notes[id].opacity = "1";
    console.log("1");
    createTable();
  }
}

function deleteNote() {
  let del = this.getAttribute("data-id");
  notes.splice(del,1)
  createTable();
  showView();
}

function checkDB() {
  localStorage.notes = JSON.stringify(notes);
  console.log("local");
};