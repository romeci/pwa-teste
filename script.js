if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js?v=4')
          .then((registration) => {
              console.log('Service Worker registrado com sucesso!', registration);
          })
          .catch((error) => {
              console.error('Falha ao registrar o Service Worker:', error);
          });
  });
}

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  const promptEvent = event;

  // Exibir mensagem nativa para instalar o aplicativo
  if (promptEvent.prompt) {
      promptEvent.prompt();
      promptEvent.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
              alert('Usuário aceitou instalar o aplicativo');

              // Download e instalação do aplicativo
              alert('Iniciando download e instalação do aplicativo');
          } else {
              alert('Usuário rejeitou instalar o aplicativo');
          }
      });
  } else {
      alert('Para instalar o aplicativo, acesse as configurações do navegador.');
  }
});
