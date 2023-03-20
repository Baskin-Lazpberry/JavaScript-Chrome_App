
const API_KEY = "f9bdf6724e300a1b2e7a621c76d17876";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);
    fetch(url).then(response => response.json()
    .then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");

        city.innerText  = data.name + ",";
        weather.innerText = data.weather[0].main;
    }));
}

function onGeoError(){
    alert("Cannot get location info");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);