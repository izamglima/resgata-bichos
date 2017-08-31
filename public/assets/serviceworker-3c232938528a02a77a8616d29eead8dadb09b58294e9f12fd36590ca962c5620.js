var CACHE_VERSION = 'v2';
var CACHE_NAME = CACHE_VERSION + ':sw-cache-';

//versão estática do site
function onInstall(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function prefill(cache) {
      return cache.addAll([

        // make sure serviceworker.js is not required by application.js
        // if you want to reference application.js from here
        '',

        '/assets/application-7092fcf6260c68d1ff2fffef1dd315fafca23163ed0c741eb11d0b45c991c1bf.css',

        '/offline.html',

      ]);
    })
  );
}

function onActivate(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CACHE_VERSION) !== 0;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
}

function onFetch(event) {
  event.respondWith(
    // try to return untouched request from network first
    fetch(event.request).catch(function() {
      // if it fails, try to return request from the cache
      return caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        }
        // if not found in cache, return default offline content for navigate requests
        if (event.request.mode === 'navigate' ||
          (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
          return caches.match('/offline.html');
        }
      })
    })
  );
}

self.addEventListener('install', onInstall);
self.addEventListener('activate', onActivate);
self.addEventListener('fetch', onFetch);
self.addEventListener('notificationclose', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;

  console.log('Closed notification: ' + primaryKey);
});
