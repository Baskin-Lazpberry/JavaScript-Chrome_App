const IMG_COUNT = 5;

const chosenImage = Math.floor(Math.random() * IMG_COUNT) + ".jpg";

const bgImage = document.getElementById("bgImg");
bgImageSource = "img/" + chosenImage;

bg = document.getElementById("bg-image")
bg.style.backgroundImage = `url("${bgImageSource}")`;