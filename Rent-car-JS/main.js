const submit = document.querySelector("#submit");
const output = document.querySelector("#output");

let allCars = {
  bmw: 200,
  audi: 250,
  hyundai: 100,
  mercedes: 300,
};

submit.addEventListener("click", () => {
  let car = document.querySelector("select").value;
  let startTime = new Date(document.querySelector("#date-1").value);
  let finishTime = new Date(document.querySelector("#date-2").value);
  let time = finishTime - startTime;
  let rentDays = Math.abs(time / (1000 * 3600 * 24));
  let price = rentDays * allCars[car];
  if (car !== "" && startTime && finishTime) {
    output.style.opacity = "1";
    output.innerHTML = `Za automobil ${car}, cena iznajmljivanja na ${rentDays} dana je ${price}`;
  }
});
