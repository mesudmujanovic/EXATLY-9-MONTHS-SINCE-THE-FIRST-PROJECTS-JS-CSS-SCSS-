const data = [
    {
        question: "Koji je glavni grad Srbije",
        a: "Beograd",
        b: "Nis",
        c: "Kragujevac",
        d: "Subotica",
        correct: "a"
    },
    {
        question: "Najduza reka na svetu",
        a: "Nil",
        b: "Amazon",
        c: "Dunav",
        d: "Raska",
        correct: "b"
    },
    {
        question: "Predsednik Srbije je",
        a: "Vucic",
        b: "Vucic",
        c: "Vucic",
        d: "Vucic",
        correct: "a"
    },
    {
        question: "AG je hemijski element",
        a: "Srebro",
        b: "Zlato",
        c: "Kalaj",
        d: "Fosfor",
        correct: "b"
    }
]

const quiz = document.querySelector('#quiz');
const questionEl = document.querySelector('#question');
const answerEl = document.querySelectorAll('.answer');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('#submit');

let current = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
    disabledChecked();
    let questions = data[current].question;
    questionEl.innerHTML = questions;
    a_text.innerHTML = data[current].a;
    b_text.innerHTML = data[current].b;
    c_text.innerHTML = data[current].c;
    d_text.innerHTML = data[current].d;
};

function disabledChecked() {
    answerEl.forEach( answerE => {
        answerE.checked = false;
    });
};

function answerQuestion(){
    let answer
    answerEl.forEach(answerE =>{
        if(answerE.checked){
          answer = answerE.id;
          console.log(answer);
        }
    })
    return answer;
}

submitBtn.addEventListener('click', ()=>{
    const answer = answerQuestion();
    if(answer === data[current].correct){
        score++;
    }
    current ++;
    if(current < data.length){ 
         loadQuiz();
     }else{
        quiz.innerHTML =    `
        <button onclick="location.reload()">Igraj ponovo</button>`
     }
})
   