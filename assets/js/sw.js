const CACHE_NAME = 'museu-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './assets/css/styles.css',
  './assets/js/script.js',
  './assets/img/noitess.jpg',
  './assets/img/ogrito.jpg',
  './assets/img/mona.jpg',
  // adicione mais arquivos estáticos usados no site
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
