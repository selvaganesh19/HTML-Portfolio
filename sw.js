// filepath: c:\Users\selva\Downloads\Sakthi-Sairam-portfolio-main\sw.js
const CACHE_NAME = 'selvaganesh-portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/images/ev.png',
  '/images/emailbot.png',
  '/images/pdfbot.png',
  '/images/link.png',
  '/images/movierec.png',
  '/images/2048.png',
  '/logo.png',
  '/profile-pic-1.png',
  '/scroll-down.gif',
  '/skill1.gif',
  '/Resume.pdf'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});