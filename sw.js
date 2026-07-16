// Service worker mínimo: necesario para que NutriScan cuente como PWA instalable.
// No cachea nada de forma agresiva; deja pasar todas las solicitudes tal cual.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
