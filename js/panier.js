const qtyFirst = document.getElementById("qtyFirst");
let amountFirst = 2974;
const qtySecond = document.getElementById("qtySecond");
let amountSecond = 89;
const qtyThird = document.getElementById("qtyThird");
let amountThird = 48;

const beforeTaxes = document.getElementById("beforeTax");
const taxes = document.getElementById("totalTax");
const total = document.getElementById("total");

const priceTom = 2974;
const priceWhip = 89;
const priceJack = 48;

const taxQC = 0.15;

const updateTotal = () => {
    const prix = amountFirst + amountSecond + amountThird;
    const tax = prix * taxQC;
    const prixTotal = prix + tax;

    beforeTaxes.innerHTML = prix;
    taxes.innerHTML = tax.toFixed(2);
    total.innerHTML = prixTotal.toFixed(2);
};

qtyFirst.addEventListener("change", (e) => {
    if (e.target.value < 1) {
        e.target.value = 1;
    } else {
        amountFirst = e.target.value * priceTom;
        updateTotal();
    }
});

qtySecond.addEventListener("change", (e) => {
    if (e.target.value < 1) {
        e.target.value = 1;
    } else {
        amountSecond = e.target.value * priceWhip;
        updateTotal();
    }
});

qtyThird.addEventListener("change", (e) => {
    if (e.target.value < 1) {
        e.target.value = 1;
    } else {
        amountThird = e.target.value * priceJack;
        updateTotal();
    }
});

updateTotal();

const handleSubmit = (e) => {
    const erreur = document.getElementById("error");
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();
    const emailRegex =
        /^(?!.*\.\.)[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,62}[A-Za-z0-9])?@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z]{2,})+$/;

    if (emailRegex.test(email)) {
        erreur.setAttribute("hidden");
        emailInput.classList.remove("bg-red-300", "outline-red-500", "outline-2");
    } else if (email.length < 1) {
        e.preventDefault();
        erreur.innerHTML = "L'adresse courriel est obligatoire.";
        emailInput.classList.add("bg-red-300", "outline-red-500", "outline-2");
        erreur.removeAttribute("hidden");
    } else if (!emailRegex.test(email)) {
        e.preventDefault();
        erreur.innerHTML = "L'adresse courriel n'est pas valide.";
        emailInput.classList.add("bg-red-300", "outline-red-500", "outline-2");
        erreur.removeAttribute("hidden");
    }
};
