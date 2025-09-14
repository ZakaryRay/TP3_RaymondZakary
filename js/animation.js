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
        imgsrc: "img/articles/coffin_PNG35.png",
        price: 3947,
    },
    {
        id: 2,
        name: "Cassette",
        imgsrc: "img/articles/audio_cassette_PNG16092.png",
        price: 7,
    },
    {
        id: 3,
        name: "Carte de crédit",
        imgsrc: "img/articles/credit_card_PNG195.png",
        price: 299,
    },
    {
        id: 4,
        name: "Fouet",
        imgsrc: "img/articles/whip_PNG24.png",
        price: 89,
    },
    {
        id: 5,
        name: "Laisse",
        imgsrc: "img/articles/leash_PNG134.png",
        price: 24,
    },
    {
        id: 6,
        name: "Boeuf haché",
        imgsrc: "img/articles/mince_PNG50.png",
        price: 13,
    },
    {
        id: 7,
        name: "Jack Daniel's",
        imgsrc: "img/articles/whisky_PNG141.png",
        price: 48,
    },
    {
        id: 8,
        name: "Numéro 4",
        imgsrc: "img/articles/number4_PNG15040.png",
        price: 4,
    },
    {
        id: 9,
        name: "Tom Cruise",
        imgsrc: "img/articles/tom_cruise_PNG25.png",
        price: "600M",
    },
    {
        id: 10,
        name: "BBQ",
        imgsrc: "img/articles/grill_PNG13962.png",
        price: 115,
    },
    {
        id: 11,
        name: "Trotinettes",
        imgsrc: "img/articles/electric_scooter_PNG66.png",
        price: 695,
    },
    {
        id: 12,
        name: "AK-47",
        imgsrc: "img/articles/ak47_PNG15466.png",
        price: 1447,
    },
    {
        id: 13,
        name: "Captain America",
        imgsrc: "img/articles/captain_america_PNG91.png",
        price: 67345,
    },
    {
        id: 14,
        name: "Chaise roulante",
        imgsrc: "img/articles/wheelchair_PNG82809.png",
        price: 357,
    },
    {
        id: 15,
        name: "Pompe",
        imgsrc: "img/articles/air_pump_PNG3.png",
        price: 8,
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
        "md:h-150",
        "lg:h-130",
        "h-115",
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
    id.textContent = `item: ${item.id}`;

    const img = document.createElement("img");
    img.classList.add("card__img", "self-center", "my-auto");
    img.setAttribute("src", item.imgsrc);

    const addBtn = document.createElement("button");
    addBtn.classList.add("card__add", "rounded-xl");
    addBtn.textContent = "Ajouter au panier";

    addBtn.addEventListener("click", () => {
        console.log("click", item.id);
        addToCart(item);
    });

    info.classList.add("card__info", "rounded-xl");

    info.append(name, price, id);
    card.append(img, info, addBtn);

    itemCards.appendChild(card);
});

const addToCart = (item) => {
    console.log("add", item.name, "to cart");

    cart.push(item);
    console.log("Cart:", cart);
};
