self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("demo-deprati-v1").then((cache) => {
        return cache.addAll(["/", "/depratidemo.html", "/style.css", "/script.js"]);
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
  