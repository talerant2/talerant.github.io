const CACHE_NAME = 'love-site-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/images/talerant.jpg',
  '/images/Anna.jpg',
  '/images/placeholder-t.jpg',
  '/images/placeholder-l.jpg',
  '/images/memory1.jpg',
  '/images/memory2.jpg',
  '/images/memory3.jpg',
  '/images/memory4.jpg',
  '/images/memory5.jpg',
  '/images/memory6.jpg',
  '/images/placeholder-memory.jpg',
  '/images/icon-192.png',
  '/images/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});