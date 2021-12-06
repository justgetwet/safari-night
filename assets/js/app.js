(function() {
  if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js', { scope: '/safari-night/'})
              .then(function(registration) {
              console.log('Service Worker Registered', registration.scope);
              return registration;
      })
      .catch(function(err) {
        console.error('Unable to register service worker.', err);
      });
      navigator.serviceWorker.ready.then(function(registration) {
        console.log('Service Worker Ready');
      });
    });
  }
})();