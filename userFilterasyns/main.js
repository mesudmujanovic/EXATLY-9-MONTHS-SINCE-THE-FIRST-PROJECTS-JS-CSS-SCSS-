const result = document.querySelector("#result");
const filter = document.querySelector("#filter");

const listOfUsers = [];

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const data = await res.json();
  data.results.forEach((user) => {
    const li = document.createElement("li");
    listOfUsers.push(li);
    li.innerHTML = `
    <img src="${user.picture.large}" alt="image" />
    <div class="user-info">
    <h4>${user.name.first} ${user.name.last}</h4>
    <p>${user.location.city}, ${user.location.country} </p>
    </div>
    `;
    result.appendChild(li);
  });
}
getData();

filter.addEventListener("input", (e) => {
  filterData(e.target.value);
});

function filterData(e) {
  listOfUsers.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes(e.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
