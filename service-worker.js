!function(){"use strict";const e=1599105334388,t="cache"+e,n=["/client/about.ed5c554e.js","/client/index.cbf550ea.js","/client/index.86179715.js","/client/interactive.df1dd8ff.js","/client/[...slug].16ea5503.js","/client/client.86402f3f.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/living-on-a-prayer.gif","/logo-192.png","/logo-512.png","/manifest.json","/successkid.jpg"]),s=new Set(n);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&s.has(n.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const n=await fetch(t.request);return e.put(t.request,n.clone()),n}catch(n){const s=await e.match(t.request);if(s)return s;throw n}}))))})}();
