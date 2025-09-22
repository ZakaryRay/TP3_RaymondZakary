const signUpBtn = document.getElementById("signUpBtn");
const signInBtn = document.getElementById("signInBtn");
const signIn = document.getElementById("signIn");
const signUp = document.getElementById("signUp");

window.addEventListener("DOMContentLoaded", () => {
    gsap.from(signIn, {
        y: 200,
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        zIndex: 1,
    });
});

signUpBtn.addEventListener("click", () => {
    signIn.classList.add("hidden");
    signUp.classList.remove("hidden");
});

signInBtn.addEventListener("click", () => {
    signUp.classList.add("hidden");
    signIn.classList.remove("hidden");
});

const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailSignUp = document.getElementById("emailSignUp");
const passwordSignUp = document.getElementById("passwordSignUp");
const confirmPasswordSignUp = document.getElementById("confirmPasswordSignUp");
const userName = document.getElementById("username");
const adresse = document.getElementById("adresse");
const erreurs = document.getElementsByClassName("erreur");
let isValide;
const emailRegex =
    /^(?!.*\.\.)[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,62}[A-Za-z0-9])?@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z]{2,})+$/;
const validateSignIn = () => {
    isValide = true;

    if (email.value.trim().length < 1) {
        isValide = false;
        erreurs[0].textContent = "L'adresse courriel est obligatoire.";
    } else if (!emailRegex.test(email.value.trim())) {
        isValide = false;
        erreurs[0].textContent = "L'adresse courriel n'est pas valide.";
    } else {
        erreurs[0].textContent = "";
    }

    if (password.value.trim().length < 1) {
        isValide = false;
        erreurs[1].textContent = "Le mot de passe est obligatoire.";
    } else if (password.value.trim().length < 8) {
        isValide = false;
        erreurs[1].textContent = "Le mot de passe doit contenir au moins 8 charactères";
    } else {
        erreurs[1].textContent = "";
    }
};

const handleSignIn = (e) => {
    e.preventDefault();
    validateSignIn();

    if (isValide) {
        signInForm.submit();
    }
};

const validateSignUp = () => {
    isValide = true;

    if (emailSignUp.value.trim().length < 1) {
        isValide = false;
        erreurs[2].textContent = "L'adresse courriel est obligatoire.";
    } else if (!emailRegex.test(emailSignUp.value.trim())) {
        isValide = false;
        erreurs[2].textContent = "L'adresse courriel n'est pas valide.";
    } else {
        erreurs[2].textContent = "";
    }

    if (passwordSignUp.value.trim().length < 1) {
        isValide = false;
        erreurs[3].textContent = "Le mot de passe est obligatoire.";
    } else if (passwordSignUp.value.trim().length < 8) {
        isValide = false;

        erreurs[3].textContent = "Le mot de passe doit contenir au moins 8 charactères";
    } else {
        erreurs[3].textContent = "";
    }

    if (confirmPasswordSignUp.value.trim().length < 1) {
        isValide = false;
        erreurs[4].textContent = "Le mot de passe est obligatoire.";
    } else if (confirmPasswordSignUp.value.trim().length < 8) {
        isValide = false;
        erreurs[4].textContent = "Le mot de passe doit contenir au moins 8 charactères";
    } else {
        erreurs[4].textContent = "";
    }

    if (confirmPasswordSignUp.value.trim() !== passwordSignUp.value.trim()) {
        isValide = false;
        erreurs[4].textContent = "Les mots de passes ne correspondent pas.";
    } else {
        erreurs[4].textContent = "";
    }

    if (userName.value.trim().length < 1) {
        isValide = false;
        erreurs[5].textContent = "Le nom d'utilisateur est obligatoire.";
    } else if (userName.value.trim().length < 8) {
        isValide = false;
        erreurs[5].textContent = "Le nom d'utilsateur doit contenir au moins 8 charactères.";
    } else {
        erreurs[5].textContent = "";
    }
};

const handleSignUp = (e) => {
    e.preventDefault();
    validateSignUp();

    if (isValide) {
        signUpForm.submit();
    }
};
