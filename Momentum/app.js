const title = document.querySelector(".hello h1");
function changeTextColor(clr){
    title.style.color = clr;
    console.log("Click!");
}
title.addEventListener("mouseover", () => {changeTextColor("brown")});
title.addEventListener("mouseout", () => {changeTextColor("black")});