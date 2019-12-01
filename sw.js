self.addEventListener('install', function(event) {
    console.log('SW Installed');
    event.waitUntil(
        caches.open('static').then(function(cache) {
            cache.addAll([
                '/',
                '/index.html',
                '/nav.html',
                '/manifest.json',
                '/sw.js',
                '/pages/home.html',
                '/pages/match.html',
                '/dist/img/logo.png',
                '/dist/css/main.css',
                '/dist/js/main.js',
                '/dist/js/api.js',
                '/dist/js/nav.js',
            ]);
        })
    );
});

self.addEventListener('activate', function() {
    console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(res) {
            if (res) {
                return res;
            } else {
                return fetch(event.request);
            }
        })
    );
})