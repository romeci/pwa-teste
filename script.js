if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js?v=2')
          .then((registration) => {
              console.log('Service Worker registrado com sucesso!', registration);
          })
          .catch((error) => {
              console.error('Falha ao registrar o Service Worker:', error);
          });
  });
}

// window.addEventListener('beforeinstallprompt', (event) => {
//   event.preventDefault();
//   const promptEvent = event;

//   // Exibir mensagem nativa para instalar o aplicativo
//   if (confirm('Você gostaria de instalar o aplicativo?')) {
//       promptEvent.prompt();
//       promptEvent.userChoice.then((choiceResult) => {
//           if (choiceResult.outcome === 'accepted') {
//               console.log('Usuário aceitou instalar o aplicativo');
//           } else {
//               console.log('Usuário rejeitou instalar o aplicativo');
//           }
//       });
//   }
// });

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  const promptEvent = event;

  // Exibir mensagem nativa para instalar o aplicativo
  if (promptEvent.prompt) {
      if (confirm('Você gostaria de instalar o aplicativo?')) {
          promptEvent.prompt();
          promptEvent.userChoice.then((choiceResult) => {
              if (choiceResult.outcome === 'accepted') {
                  alert('Usuário aceitou instalar o aplicativo');

                  // Download e instalação do aplicativo
                  promptEvent.userChoice.then(() => {
                      alert('Iniciando download e instalação do aplicativo');
                  });
              } else {
                  alert('Usuário rejeitou instalar o aplicativo');
              }
          });
      }
  } else {
      alert('Para instalar o aplicativo, acesse as configurações do navegador.');
  }
});


