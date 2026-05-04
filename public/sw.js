const IMAGE_CACHE = 'clinica-estetica-images-v1';
const IMAGE_CACHE_LIMIT = 40;

const isImageRequest = (request) => {
  if (request.destination === 'image') {
    return true;
  }

  return /\.(avif|gif|jpe?g|png|svg|webp)(\?.*)?$/i.test(new URL(request.url).pathname);
};

const trimImageCache = async () => {
  const cache = await caches.open(IMAGE_CACHE);
  const keys = await cache.keys();

  if (keys.length <= IMAGE_CACHE_LIMIT) {
    return;
  }

  await Promise.all(keys.slice(0, keys.length - IMAGE_CACHE_LIMIT).map((request) => cache.delete(request)));
};

const fetchAndCacheImage = async (request) => {
  const cache = await caches.open(IMAGE_CACHE);
  const response = await fetch(request);

  if (response && (response.ok || response.type === 'opaque')) {
    cache.put(request, response.clone()).then(trimImageCache);
  }

  return response;
};

const cacheFirstWithRefresh = async (request) => {
  const cache = await caches.open(IMAGE_CACHE);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    fetchAndCacheImage(request).catch(() => undefined);
    return cachedResponse;
  }

  return fetchAndCacheImage(request);
};

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith('clinica-estetica-') && key !== IMAGE_CACHE)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || !isImageRequest(event.request)) {
    return;
  }

  event.respondWith(cacheFirstWithRefresh(event.request));
});
