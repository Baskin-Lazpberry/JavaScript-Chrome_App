const clock = document.getElementById("clock");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const colon = document.getElementById("colon");

const TOGGLE_COLOR = "tomato"

let num = 5;
function getClock() {
    const date = new Date();

    hour.innerText = String(date.getHours()).padStart(2, "0");
    minute.innerText = String(date.getMinutes()).padStart(2, "0");
    colon.classList.toggle(TOGGLE_COLOR);
}

getClock();
setInterval(getClock, 1000);