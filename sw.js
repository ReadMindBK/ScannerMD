/* ================================================================
   SERVICE WORKER READMIND
   Versión nueva para invalidar la caché anterior.
   config.js y los archivos .mind usan red primero, para que al
   publicar nuevos libros no quede una lista vieja en el celular.
   ================================================================ */
const CACHE_NAME = "readmind-scanner-books-v4";
const APP_FILES = [
  "./",
  "./index.html",
  "./config.js",
  "./manifest.webmanifest",
  "./assets/icon.ico",
  "./assets/header-scanner.jpg",
  "./assets/web/book1.png",
  "./assets/web/book2.png",
  "./assets/web/book3.png",
  "./assets/mito/1.jpg",
  "./assets/mito/2.jpg",
  "./assets/mito/3.jpg",
  "./assets/mito/4.jpg",
  "./assets/mito/5.jpg",
  "./assets/mito/6.jpg",
  "./assets/mito/7.jpg",
  "./assets/mito/8.jpg",
  "./assets/mito/9.jpg",
  "./assets/mito/10.jpg",
  "./assets/mito/11.jpg",
  "./assets/mito/12.jpg",
  "./assets/mito/13.jpg",
  "./assets/mito/14.jpg",
  "./assets/mito/15.jpg",
  "./assets/mito/16.jpg",
  "./assets/mito/17.jpg",
  "./assets/mito/18.jpg",
  "./assets/mito/19.jpg",
  "./assets/mito/20.jpg",
  "./assets/mito/21.jpg",
  "./assets/mito/22.jpg",
  "./assets/mito/23.jpg",
  "./assets/mito/24.jpg",
  "./assets/mito/25.jpg",
  "./assets/mito/26.jpg",
  "./assets/mito/27.jpg",
  "./assets/mito/28.jpg",
  "./assets/mito/29.jpg",
  "./assets/mito/30.jpg",
  "./assets/mito/31.jpg",
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
