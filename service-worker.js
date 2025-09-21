const CACHE_NAME = "static-cache-v10";

const FILES_TO_CACHE = [
    "offline.html",
    "animation.js",
    "accueil.js",
    "air_pump_PNG3.png",
    "coffin_PNG35.png",
    "ak47_PNG15466.png",
    "audio_cassette_PNG16092.png",
    "captain_america_PNG91.png",
    "credit_card_PNG195.png",
    "electric_scooter_PNG66.png",
    "grill_PNG13962.png",
    "leash_PNG134.png",
    "mince_PNG50.png",
    "number4_PNG15040.png",
    "tom_cruise_PNG25.png",
    "wheelchair_PNG82809.png",
    "whip_PNG24.png",
    "whisky_PNG141.png",
    "LOGO_BLANC.svg",
    "LOGO_COULEUR.svg",
    "LOGO_NOIR.svg",
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
                return cache.match("/offline.html");
            });
        })
    );
});
