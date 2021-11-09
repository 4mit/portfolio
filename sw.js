const STATIC_CACHE = "static-cache-v1";
const DYNAMIC_CACHE = "dynamic-cache";

self.addEventListener("install", function (event) {
  console.log("installing sw");
  event.waitUntil(
    caches.open(STATIC_CACHE).then(function (cache) {
      cache.addAll([
        "/",
        "/index.html",
        "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js",
        "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
        "https://threejs.org/examples/js/libs/stats.min.js",
      ]);
    })
  );
  return self.clients.claim();
});

self.addEventListener("activate", function (event) {
  console.log("activating  sw");
  return self.clients.claim();
});
