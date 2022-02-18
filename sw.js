const CACHE_ELEMENTS = ["./",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "Css/style.css",
    "./components/Contador.jsx"
];

const CACHE_NAME = "V4_cache_contador_react"
const self = this
    /**Instala EL cache En el Service Workers */
self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            11
            cache.addAll(CACHE_ELEMENTS).then(() => {
                self.skipWaiting()

            }).catch(console.log)
        })


    );
});

/**Activa y Elimina En anterior cache actualizando su version antigua */
self.addEventListener("activate", (e) => {
    const cacheWhitelist = [CACHE_NAME];
    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(cacheNames.map(cacheName => {
                cacheWhitelist.indexOf(cacheName) === -1 && caches.delete(cacheName)


            }));
        }).then(() => self.clients.claim())

    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => {
            if (res) {
                return res
            }
            return fetch(e.request);
        })

    )
});



/**

 */