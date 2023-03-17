const IMG_COUNT = 5;

const chosenImage = Math.floor(Math.random() * IMG_COUNT) + ".jpg";

const bgImage = document.createElement("img");
bgImage.src = "img/" + chosenImage;

document.body.appendChild(bgImage);