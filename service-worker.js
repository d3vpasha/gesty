/* 
  https://blog.bitsrc.io/understanding-service-workers-and-caching-strategies-a6c1e1cbde03
  https://codelabs.developers.google.com/dev-pwa-training/
*/
let CACHE_NAME = 'sw-v2'
self.addEventListener('install', function(event) {
  console.log("Installation of the service worker");
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/submit.php',
          '/css/animate.css',
          '/css/bootstrap.min.css',
          '/css/nivo-lightbox.min.css',
          '/css/owl.carousel.min.css',
          '/css/owl.theme.default.min.css',
          '/css/style.css',
          '/js/bootstrap.min.js',
          '/js/contact.min.js',
          '/js/imagesloaded.min.js',
          '/js/jqBootstrapValidation.min.js',
          '/js/jquery-1.11.2.min.js',
          '/js/jquery.isotope.min.js',
          '/js/main.min.js',
          '/js/modernizr.custom.js',
          '/js/nivo-lightbox.min.js',
          '/js/owl.carousel.min.js',
          '/js/parallax.min.js',
          '/js/skrollr.min.js',
          '/js/SmoothScroll.min.js'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log("Activation of the service worker");
});

self.addEventListener('fetch', function(event) {
  console.log("Fetch intercepted for : ", event.request.url);
  event.respondWith(
    caches.match(event.request).then( function(response) {
      return response || fetch(event.request);
    })
  );
});