const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//Show username with greetings
function showGreeting(name) {
    greeting.innerText = `Hello, ${name}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//When login infos are submitted,
function onLoginSubmit(event) {
    event.preventDefault();

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);

    showGreeting(username);
}

//===========================================//
//                  Main part                //
//===========================================//

//get username from localStorage
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){ //If there's no saved name
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else{ //If there's a saved one.
    showGreeting(savedUsername);
}