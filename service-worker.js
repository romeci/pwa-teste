self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker ativado');
});

self.addEventListener('beforeinstallprompt', (event) => {
  // Exibir prompt de instalação nativo
  event.preventDefault();
  event.prompt();

  // Armazenar o evento para uso posterior
  const promptEvent = event;

  // Tratar a instalação do app
  self.addEventListener('install', (event) => {
    // Comparar os IDs de evento para confirmar que a instalação foi iniciada pelo prompt
    if (event.installing.id === promptEvent.eventId) {
      // Esperar a instalação ser concluída
      event.installing.addEventListener('statechange', (event) => {
        if (event.target.state === 'installed') {
          // Instalação concluída!
          console.log('App instalado com sucesso!');

          // Disparar um evento customizado para notificar a página sobre a instalação
          self.dispatchEvent(new Event('appInstalled'));
        }
      });
    }
  });
});

// Ouvir o evento customizado 'appInstalled' na página principal
window.addEventListener('appInstalled', () => {
  // Exibir mensagem de sucesso ou realizar outras ações após a instalação
  console.log('App instalado! ');
});


self.addEventListener('fetch', (event) => {
  console.log('Requisição de rede:', event.request.url);
  event.respondWith(
      fetch(event.request, { cache: 'no-store' }) // Evitar o cache
  );
});
