self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker ativado');
});

self.addEventListener('fetch', (event) => {
  console.log('Requisição de rede:', event.request.url);
  event.respondWith(
      caches.match(event.request)
          .then((response) => {
              return response || fetch(event.request);
          })
  );
});
