// This is to make `declare const self` work by converting the file to ES module
import {} from 'react';

declare const self: ServiceWorkerGlobalScope;

const handleRequest = async (req: Request) => {
  const url = new URL(req.url, 'http://localhost:4000').toString();
  console.log('Proxy URL', url);
  const res = await fetch(url);
  return res;
};

self.addEventListener('fetch', e => {
  console.log(e.request.method, e.request.url);
  if (e.request.method !== 'GET') return;
  e.respondWith(handleRequest(e.request));
});

self.addEventListener('install', () => {
  console.log('Installed');
});
