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
        name: "Cercueil",
        description: "Cercueil de qualité médiocre.",
        imgsrc: "https://pngimg.com/uploads/coffin/small/coffin_PNG35.png",
        price: 3947.97,
        categorie: "objet",
    },
    {
        id: 2,
        name: "Cassette SONY",
        description: "Peu utile en 2025.",
        imgsrc: "https://pngimg.com/uploads/audio_cassette/small/audio_cassette_PNG16092.png",
        price: 7.97,
        categorie: "objet",
    },
    {
        id: 3,
        name: "Carte de crédit à N.Martin",
        description: "Qui part à la chasse perd sa place.",
        imgsrc: "https://pngimg.com/uploads/credit_card/small/credit_card_PNG195.png",
        price: 299.97,
        categorie: "objet",
    },
    {
        id: 4,
        name: "Fouet",
        description: "Rien à ajouter.",
        imgsrc: "https://pngimg.com/uploads/whip/small/whip_PNG24.png",
        price: 89.97,
        categorie: "objet",
    },
    {
        id: 5,
        name: "Laisse",
        description: "Toujours rien à ajouter.",
        imgsrc: "https://pngimg.com/uploads/leash/small/leash_PNG134.png",
        price: 899.95,
    },
    {
        id: 6,
        name: "Stylo Téléporteur",
        description: "Tes notes de cours se retrouvent directement… dans un autre univers.",
        imgsrc: "https://pngimg.com/uploads/coffin/small/coffin_PNG35.png",
        price: 3.3,
    },
    {
        id: 7,
        name: "Pizza Auto-Cuisante",
        description: "Se prépare toute seule, mais mange parfois tes devoirs en entrée.",
        imgsrc: "https://pngimg.com/uploads/coffin/small/coffin_PNG35.png",
        price: 14.9,
    },
    {
        id: 8,
        name: "Écouteurs Cactus",
        description: "Qualité sonore piquante, déconseillés aux oreilles sensibles.",
        imgsrc: "https://pngimg.com/uploads/coffin/small/coffin_PNG35.png",
        price: 59.99,
    },
    {
        id: 9,
        name: "Mini-Dragon de Compagnie",
        description: "Idéal pour réchauffer ton appart, moins pour tes rideaux.",
        imgsrc: "https://pngimg.com/uploads/coffin/small/coffin_PNG35.png",
        price: 350,
    },
    {
        id: 10,
        name: "Sandwich Fluorescent",
        description: "Brille dans le noir, parfait pour un pique-nique post-apocalyptique.",
        imgsrc: "https://pngimg.com/uploads/coffin/small/coffin_PNG35.png",
        price: 5.2,
    },
    {
        id: 11,
        name: "Réveil Voyageur Temporel",
        description: "Te réveille hier, aujourd’hui ou demain. Résultats non garantis.",
        imgsrc: "https://pngimg.com/uploads/coffin/small/coffin_PNG35.png",
        price: 75.0,
    },
    {
        id: 12,
        name: "Chaise Flottante",
        description: "Confort absolu, mais risque de dériver au milieu de la pièce.",
        imgsrc: "https://pngimg.com/uploads/coffin/small/coffin_PNG35.png",
        price: 42,
    },
    {
        id: 13,
        name: "Chargeur universel",
        description: "Compatible avec tout, sauf ton propre téléphone.",
        imgsrc: "https://pngimg.com/uploads/coffin/small/coffin_PNG35.png",
        price: 22.2,
    },
    {
        id: 14,
        name: "Clé USB Banane",
        description: "Stocke des données… et du potassium.",
        imgsrc: "https://pngimg.com/uploads/coffin/small/coffin_PNG35.png",
        price: 16.9,
    },
    {
        id: 15,
        name: "Poisson Rouge Robot",
        description: "Ne meurt jamais, mais réclame des mises à jour logicielles quotidiennes.",
        imgsrc: "https://pngimg.com/uploads/coffin/small/coffin_PNG35.png",
        price: 199.95,
    },
];

const itemCards = document.getElementById("itemCards");

items.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add(
        "item-card",
        "bg-blue-500",
        "rounded-xl",
        "p-2",
        "col-span-4",
        "h-100",
        "flex",
        "flex-col"
    );

    const name = document.createElement("h3");
    name.classList.add("card__name");
    name.textContent = item.name;

    const price = document.createElement("p");
    price.classList.add("card__price");
    price.textContent = `Prix: ${item.price}$`;

    const description = document.createElement("p");
    description.classList.add("card__description");
    description.textContent = item.description;

    const id = document.createElement("id");
    id.classList.add("card__id");
    id.textContent = `Numéro d'item: ${item.id}`;

    const img = document.createElement("img");
    img.classList.add("card__img");
    img.setAttribute("src", item.imgsrc);

    div.append(img, name, price, description, id);

    itemCards.appendChild(div);
});
