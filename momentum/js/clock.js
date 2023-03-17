const clock = document.getElementById("clock");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const colon = document.getElementById("colon");

const TOGGLE_COLOR = "tomato"

let num = 5;
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    hour.innerText = hours;
    minute.innerText = minutes;
    colon.classList.toggle(TOGGLE_COLOR);
}

getClock();
setInterval(getClock, 1000);