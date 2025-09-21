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
        price: 2974,
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

document.addEventListener("DOMContentLoaded", () => {
    const itemCards = document.getElementById("itemCards");

    const renderItems = (items) => {
        itemCards.innerHTML = "";

        items.forEach((item) => {
            const info = document.createElement("div");
            const card = document.createElement("div");
            card.classList.add(
                "card",
                "bg-white",
                "rounded-2xl",
                "p-4",
                "lg:col-span-4",
                "col-span-12",
                "md:col-span-6",
                "md:h-150",
                "lg:h-130",
                "h-115",
                "flex",
                "flex-col",
                "shadow-md",
                "hover:shadow-xl",
                "transition",
                "duration-300",
                "border",
                "border-gray-100"
            );

            const name = document.createElement("h3");
            name.classList.add("card__name");
            name.textContent = item.name;

            const price = document.createElement("p");
            price.classList.add("card__price");
            price.textContent = `Prix: ${item.price}$`;

            const id = document.createElement("p");
            id.classList.add("card__id");
            id.textContent = `item: ${item.id}`;

            const img = document.createElement("img");
            img.classList.add("card__img", "self-center", "my-auto");
            img.setAttribute("src", item.imgsrc);

            const addBtn = document.createElement("button");
            addBtn.classList.add(
                "card__add",
                "rounded-xl",
                "flex",
                "justify-center",
                "items-center",
                "px-4",
                "py-2",
                "mt-3",
                "bg-blue-500",
                "text-white",
                "font-medium",
                "shadow-md",
                "transition",
                "duration-400",
                "hover:bg-blue-600",
                "hover:shadow-lg",
                "active:scale-95"
            );
            addBtn.textContent = "Ajouter au panier";

            addBtn.addEventListener("click", () => {
                console.log("click", item.id);
                addToCart(item);
            });

            info.classList.add(
                "card__info",
                "rounded-xl",
                "bg-gray-50",
                "p-3",
                "mt-3",
                "flex",
                "flex-col",
                "gap-1",
                "text-white",
                "shadow-inner"
            );
            itemCards.append(card);
            info.append(name, price, id);
            card.append(img, info, addBtn);
        });
    };

    const sortByPriceAsc = () => {
        const sorted = [...items].sort((a, b) => a.price - b.price);
        renderItems(sorted);
    };
    const sortByPriceDesc = () => {
        const sorted = [...items].sort((a, b) => b.price - a.price);
        renderItems(sorted);
    };

    renderItems(items);

    document.getElementById("sortByPriceAscBtn").addEventListener("click", sortByPriceAsc);
    document.getElementById("sortByPriceDescBtn").addEventListener("click", sortByPriceDesc);
});

const cart = [];
const addToCart = (item) => {
    console.log("add", item.name, "to cart");

    cart.push(item);
    console.log("Cart:", cart);
};
