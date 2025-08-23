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
        name: "Carte de crédit",
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
        name: "Boeuf haché maigre",
        description: "1kg de boeuf haché maigre.",
        imgsrc: "https://pngimg.com/uploads/mince/small/mince_PNG50.png",
        price: 3.3,
    },
    {
        id: 7,
        name: "Jack Daniel's",
        description: "Vendeur exclusif au Québec depuis Trump.",
        imgsrc: "https://pngimg.com/uploads/whisky/small/whisky_PNG141.png",
        price: 14.9,
    },
    {
        id: 8,
        name: "Le numéro 4",
        description: "4",
        imgsrc: "https://pngimg.com/uploads/number4/small/number4_PNG15040.png",
        price: 59.99,
    },
    {
        id: 9,
        name: "Tom Cruise",
        description: "Combo idéal avec une laisse et un fouet",
        imgsrc: "https://pngimg.com/uploads/tom_cruise/small/tom_cruise_PNG25.png",
        price: 350,
    },
    {
        id: 10,
        name: "BBQ",
        description: "Un BBQ simple et conventionel",
        imgsrc: "https://pngimg.com/uploads/grill/small/grill_PNG13962.png",
        price: 5.2,
    },
    {
        id: 11,
        name: "2 Trotinettes électriques",
        description: "Un c'est bien, mais deux c'est mieux.",
        imgsrc: "https://pngimg.com/uploads/electric_scooter/small/electric_scooter_PNG66.png",
        price: 75.0,
    },
    {
        id: 12,
        name: "AK-47",
        description: "RUSH B! RUSH B!",
        imgsrc: "https://pngimg.com/uploads/ak47/small/ak47_PNG15466.png",
        price: 42,
    },
    {
        id: 13,
        name: "Captain America",
        description: "Une réplique 1:1 de Captai America.",
        imgsrc: "https://pngimg.com/uploads/captain_america/small/captain_america_PNG91.png",
        price: 22.2,
    },
    {
        id: 14,
        name: "Chaise roulante",
        description: "Non disponible à la livraison, doit être récupée au 4e étage.",
        imgsrc: "https://pngimg.com/uploads/wheelchair/small/wheelchair_PNG82809.png",
        price: 16.9,
    },
    {
        id: 15,
        name: "Pompe",
        description: "Pompe pour gonfler plein de chose.",
        imgsrc: "https://pngimg.com/uploads/air_pump/small/air_pump_PNG3.png",
        price: 199.95,
    },
];

const itemCards = document.getElementById("itemCards");

items.forEach((item) => {
    const info = document.createElement("div");
    const card = document.createElement("div");
    card.classList.add(
        "card",
        "bg-blue-500",
        "rounded-xl",

        "lg:col-span-4",
        "col-span-6",
        "md:h-100",
        "h-70",
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
    description.classList.add("card__description", "hidden", "md:block");
    description.textContent = item.description;

    const id = document.createElement("id");
    id.classList.add("card__id");
    id.textContent = `Numéro d'item: ${item.id}`;

    const img = document.createElement("img");
    img.classList.add(
        "card__img",
        "w-[50%]",
        "self-center",
        "my-auto",
        "max-w-25",
        "md:max-w-40",
        "lg:max-w-50"
    );
    img.setAttribute("src", item.imgsrc);

    info.classList.add("card__info", "rounded-b-xl");

    info.append(name, price, description, id);
    card.append(img, info);

    itemCards.append(card);
});
