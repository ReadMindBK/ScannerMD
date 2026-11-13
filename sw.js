/* ================================================================
   SERVICE WORKER READMIND
   Versión nueva para invalidar la caché anterior.
   config.js y los archivos .mind usan red primero, para que al
   publicar nuevos libros no quede una lista vieja en el celular.
   ================================================================ */
const CACHE_NAME = "readmind-scanner-multi-v3";
const APP_FILES = [
  "./",
  "./index.html",
  "./config.js",
  "./manifest.webmanifest",
  "./assets/icon.ico",
  "./assets/1.jpg",
  "./assets/2.jpg",
  "./assets/3.jpg",
  "./assets/4.jpg",
  "./assets/5.jpg",
  "./assets/6.jpg",
  "./assets/7.jpg",
  "./assets/8.jpg",
  "./assets/9.jpg",
  "./assets/10.jpg",
  "./assets/11.jpg",
  "./assets/12.jpg",
  "./assets/13.jpg",
  "./assets/14.jpg",
  "./assets/15.jpg",
  "./assets/16.jpg",
  "./assets/17.jpg",
  "./assets/18.jpg",
  "./assets/19.jpg",
  "./assets/20.jpg",
  "./assets/21.jpg",
  "./assets/22.jpg",
  "./assets/23.jpg",
  "./assets/24.jpg",
  "./assets/25.jpg",
  "./assets/26.jpg",
  "./assets/27.jpg",
  "./assets/28.jpg",
  "./assets/29.jpg",
  "./assets/30.jpg",
  "./assets/31.jpg",
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  const isConfig = url.pathname.endsWith("/config.js");
  const isMind = url.pathname.endsWith(".mind");

  if (isConfig || isMind) {
    event.respondWith(
      fetch(event.request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached =>
      cached || fetch(event.request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      })
    )
  );
});
