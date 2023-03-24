const timeDiv = document.querySelector(".time");
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let seconds = 0;
let interval;

const stopwatch = function () {
    seconds++;
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    let secs = seconds % 60;
    secs < 10 ? secs = `0${seconds}` : secs;
    minutes < 10 ? minutes = `0${minutes}` : minutes;
    hours < 10 ? hours = `0${hours}` : hours;
    timeDiv.innerHTML = `${hours}:${minutes}:${secs}`;
};

const start = function () {
    if (interval) {
        return;
    }
    interval = setInterval(stopwatch, 1000);
};

const stop = function () {
    clearInterval(interval);
    interval = false;
};

const reset = function () {
    seconds = 0;
    timeDiv.innerHTML = "00:00:00";
};

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

