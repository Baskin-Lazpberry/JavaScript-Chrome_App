function onGeoOk(position){
    console.log(position);
}

function onGeoError(){
    alert("Cannot get location info");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);