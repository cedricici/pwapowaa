// install event
self.addEventListener('install', (event) => {
  console.log("install");
  event.waitUntil(
    caches.open('myappcache')
      .then((cache) => {
        return cache.addAll([
          './',
          'index.html',
          'styles.css',
          'sw.js',
          'manifest.json',
          'a.jpg',
          'b.jpg',
          'c.jpg',
          'd.jpg'
       ]);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', (event) => {
  console.log("activate");
});
// fetch event
self.addEventListener('fetch', (event) => {
  console.log("fetch");
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
