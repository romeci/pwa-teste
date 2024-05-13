self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker ativado');
});



self.addEventListener('fetch', (event) => {
  console.log('Requisição de rede:', event.request.url);
  event.respondWith(
      fetch(event.request, { cache: 'no-store' }) // Evitar o cache
  );
});
