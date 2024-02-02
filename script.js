function login() {
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
    document.querySelector(".button-box .toggle-btn").innerHTML = "Sign Up";
}

function register() {
    document.getElementById("register").style.display = "block";
    document.getElementById("login").style.display = "none";

}

document.addEventListener("DOMContentLoaded", function() {
    register();
});