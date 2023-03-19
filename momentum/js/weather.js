
const API_KEY = "";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?
    lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);
    fetch(url);
}

function onGeoError(){
    alert("Cannot get location info");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);