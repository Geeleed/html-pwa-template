const src = [
  "./src/script.js", 
  "./src/style.css"
];

const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "./manifest.json",
  "./index.html",
  "./register.js",
  ...src,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
