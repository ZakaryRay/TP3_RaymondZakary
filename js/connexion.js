const signUpBtn = document.getElementById("signUpBtn");
const signInBtn = document.getElementById("signInBtn");
const signIn = document.getElementById("signIn");
const signUp = document.getElementById("signUp");

signUpBtn.addEventListener("click", () => {
    signIn.classList.add("hidden");
    signUp.classList.remove("hidden");
});

signInBtn.addEventListener("click", () => {
    signUp.classList.add("hidden");
    signIn.classList.remove("hidden");
});

