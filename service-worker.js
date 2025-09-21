const CACHE_NAME = "static-cache-v13";

const FILES_TO_CACHE = [
    "offline.html",
    "js/animation.js",
    "js/accueil.js",
    "manifest.json",
    "img/articles/air_pump_PNG3.png",
    "img/articles/coffin_PNG35.png",
    "img/articles/ak47_PNG15466.png",
    "img/articles/audio_cassette_PNG16092.png",
    "img/articles/captain_america_PNG91.png",
    "img/articles/credit_card_PNG195.png",
    "img/articles/electric_scooter_PNG66.png",
    "img/articles/grill_PNG13962.png",
    "img/articles/leash_PNG134.png",
    "img/articles/mince_PNG50.png",
    "img/articles/number4_PNG15040.png",
    "img/articles/tom_cruise_PNG25.png",
    "img/articles/wheelchair_PNG82809.png",
    "img/articles/whip_PNG24.png",
    "img/articles/whisky_PNG141.png",
    "img/LOGO_BLANC.svg",
    "img/LOGO_COULEUR.svg",
    "img/LOGO_NOIR.svg",
];

self.addEventListener("install", (evt) => {
    console.log("[ServiceWorker] install");

    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("[ServiceWorker] Pre-caching offline page");
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});

self.addEventListener("activate", (evt) => {
    console.log("[ServiceWorker] Activate");

    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log("[ServiceWorker] Removing old cache", key);

                        return caches.delete(key);
                    }
                })
            );
        })
    );

    self.clients.claim();
});

self.addEventListener("fetch", (evt) => {
    console.log("[ServiceWorker] Fetch", evt.request.url);

    if (evt.request.mode !== "navigate") {
        return;
    }

    evt.respondWith(
        fetch(evt.request).catch(async () => {
            return caches.open(CACHE_NAME).then((cache) => {
                return cache.match("offline.html");
            });
        })
    );
});
