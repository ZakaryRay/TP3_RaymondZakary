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
        imgsrc: "https://pngimg.com/uploads/coffin/small/coffin_PNG35.png",
        price: 3947.97,
        categorie: "objet",
    },
    {
        id: 2,
        name: "Cassette SONY",
        imgsrc: "https://pngimg.com/uploads/audio_cassette/small/audio_cassette_PNG16092.png",
        price: 7.97,
        categorie: "objet",
    },
    {
        id: 3,
        name: "Carte de crédit",
        imgsrc: "https://pngimg.com/uploads/credit_card/small/credit_card_PNG195.png",
        price: 299.97,
        categorie: "objet",
    },
    {
        id: 4,
        name: "Fouet",
        imgsrc: "https://pngimg.com/uploads/whip/small/whip_PNG24.png",
        price: 89.97,
        categorie: "objet",
    },
    {
        id: 5,
        name: "Laisse",
        imgsrc: "https://pngimg.com/uploads/leash/small/leash_PNG134.png",
        price: 899.95,
    },
    {
        id: 6,
        name: "Boeuf haché maigre",
        imgsrc: "https://pngimg.com/uploads/mince/small/mince_PNG50.png",
        price: 3.3,
    },
    {
        id: 7,
        name: "Jack Daniel's",
        imgsrc: "https://pngimg.com/uploads/whisky/small/whisky_PNG141.png",
        price: 14.9,
    },
    {
        id: 8,
        name: "Le numéro 4",
        imgsrc: "https://pngimg.com/uploads/number4/small/number4_PNG15040.png",
        price: 59.99,
    },
    {
        id: 9,
        name: "Tom Cruise",
        imgsrc: "https://pngimg.com/uploads/tom_cruise/small/tom_cruise_PNG25.png",
        price: 350,
    },
    {
        id: 10,
        name: "BBQ",
        imgsrc: "https://pngimg.com/uploads/grill/small/grill_PNG13962.png",
        price: 5.2,
    },
    {
        id: 11,
        name: "Trotinettes",
        imgsrc: "https://pngimg.com/uploads/electric_scooter/small/electric_scooter_PNG66.png",
        price: 75.0,
    },
    {
        id: 12,
        name: "AK-47",
        imgsrc: "https://pngimg.com/uploads/ak47/small/ak47_PNG15466.png",
        price: 42,
    },
    {
        id: 13,
        name: "Captain America",
        imgsrc: "https://pngimg.com/uploads/captain_america/small/captain_america_PNG91.png",
        price: 22.2,
    },
    {
        id: 14,
        name: "Chaise roulante",
        imgsrc: "https://pngimg.com/uploads/wheelchair/small/wheelchair_PNG82809.png",
        price: 16.9,
    },
    {
        id: 15,
        name: "Pompe",
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
        "p-2",
        "lg:col-span-4",
        "col-span-6",
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

    const id = document.createElement("id");
    id.classList.add("card__id");
    id.textContent = `Numéro d'item: ${item.id}`;

    const img = document.createElement("img");
    img.classList.add("card__img", "self-center", "my-auto");
    img.setAttribute("src", item.imgsrc);

    info.classList.add("card__info", "rounded-xl");

    info.append(name, price, id);
    card.append(img, info);

    itemCards.append(card);
});
