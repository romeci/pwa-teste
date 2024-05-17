const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// self.addEventListener('install', (event) => {
//   console.log('Service Worker instalado');
// });

// self.addEventListener("activate", (event) => {
//   const cacheWhitelist = [CACHE_NAME];
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

// self.addEventListener('activate', (event) => {
//   console.log('Service Worker ativado');
// });

self.addEventListener('fetch', (event) => {
  console.log('Requisição de rede:', event.request.url);
  event.respondWith(
      caches.match(event.request)
          .then((response) => {
              return response || fetch(event.request);
          })
  );
});
