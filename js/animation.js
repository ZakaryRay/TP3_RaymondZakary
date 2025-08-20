window.addEventListener("load", () => {
    const logo = document.getElementById("logo");

    gsap.fromTo(
        logo,
        {
            scale: 0.5,
            opacity: 0,
            x: -30,
        },
        {
            scale: 1,
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.inOut",
            delay: 0.3,
        }
    );
});
let isOpen = false;

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const tl = gsap.timeline();

const animateBtn = () => {
    tl.clear();
    tl.to(menuBtn, {
        opacity: 0,
        scale: 0.75,
        duration: 0.3,
        rotation: "+=90",
        ease: "power2.inOut",
    }).to(menuBtn, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.inOut",
    });
    tl.play();
};

menuBtn.addEventListener("click", () => {
    isOpen = !isOpen;
    console.log("isOpen:", isOpen);

    if (isOpen) {
        menuBtn.classList.remove("bx-menu");
        menuBtn.classList.add("bx-x");
        gsap.fromTo(
            navMenu,
            {
                opacity: 0,
                y: -100,
                scale: 0.5,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                y: 0,
            }
        );
    } else {
        menuBtn.classList.remove("bx-x");
        menuBtn.classList.add("bx-menu");
        gsap.fromTo(
            navMenu,
            {
                opacity: 1,
                scale: 1,

                y: 0,
            },
            {
                opacity: 0,
                y: -100,
                scale: 0.5,
                duration: 0.3,
                ease: "back.out",
            }
        );
    }

    animateBtn();
});

const items = [
    {
        id: 1,
        name: "Fusée Banane",
        description: "Parfait pour une fringale intergalactique. Attention aux singes cosmiques.",
        price: 42.9,
    },
    {
        id: 2,
        name: "Chaussettes Invisibles",
        description: "Enfin une excuse valable pour la chaussette disparue dans la sécheuse.",
        price: 7.5,
    },
    {
        id: 3,
        name: "Café Quantique",
        description: "À la fois chaud et froid, il te réveille et t’endort en même temps.",
        price: 199.9,
    },
    {
        id: 4,
        name: "Armée de Canards en Caoutchouc",
        description: "Prête à envahir ta baignoire et conquérir la salle de bain.",
        price: 12.4,
    },
    {
        id: 5,
        name: "Ordinateur Portable en Fromage",
        description: "Puissant, mais attention aux souris hackeuses.",
        price: 899.95,
    },
    {
        id: 6,
        name: "Stylo Téléporteur",
        description: "Tes notes de cours se retrouvent directement… dans un autre univers.",
        price: 3.3,
    },
    {
        id: 7,
        name: "Pizza Auto-Cuisante",
        description: "Se prépare toute seule, mais mange parfois tes devoirs en entrée.",
        price: 14.9,
    },
    {
        id: 8,
        name: "Écouteurs Cactus",
        description: "Qualité sonore piquante, déconseillés aux oreilles sensibles.",
        price: 59.99,
    },
    {
        id: 9,
        name: "Mini-Dragon de Compagnie",
        description: "Idéal pour réchauffer ton appart, moins pour tes rideaux.",
        price: 350,
    },
    {
        id: 10,
        name: "Sandwich Fluorescent",
        description: "Brille dans le noir, parfait pour un pique-nique post-apocalyptique.",
        price: 5.2,
    },
    {
        id: 11,
        name: "Réveil Voyageur Temporel",
        description: "Te réveille hier, aujourd’hui ou demain. Résultats non garantis.",
        price: 75.0,
    },
    {
        id: 12,
        name: "Chaise Flottante",
        description: "Confort absolu, mais risque de dériver au milieu de la pièce.",
        price: 42,
    },
    {
        id: 13,
        name: "Chargeur universel",
        description: "Compatible avec tout, sauf ton propre téléphone.",
        price: 22.2,
    },
    {
        id: 14,
        name: "Clé USB Banane",
        description: "Stocke des données… et du potassium.",
        price: 16.9,
    },
    {
        id: 15,
        name: "Poisson Rouge Robot",
        description: "Ne meurt jamais, mais réclame des mises à jour logicielles quotidiennes.",
        price: 199.95,
    },
];

const itemCards = document.getElementById("itemCards");

items.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("item-card", "bg-blue-500", "rounded-xl", "p-2", "col-span-6");

    const name = document.createElement("h3");
    name.textContent = item.name;

    const price = document.createElement("p");
    price.textContent = item.price;

    const description = document.createElement("p");
    description.textContent = item.description;

    const id = document.createElement("id");
    id.textContent = item.id;

    div.append(name, price, description, id);

    itemCards.appendChild(div);
});
