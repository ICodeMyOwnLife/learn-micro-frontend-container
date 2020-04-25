const handleRequest = async (req) => {
    const url = new URL(req.url, 'http://localhost:4000').toString();
    console.log('Proxy URL', url);
    const res = await fetch(url);
    return res;
};
self.addEventListener('fetch', e => {
    console.log(e.request.method, e.request.url);
    if (e.request.method !== 'GET')
        return;
    e.respondWith(handleRequest(e.request));
});
self.addEventListener('install', () => {
    console.log('Installed');
});
