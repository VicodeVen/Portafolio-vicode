// ;
// //Asignar un nombre y version al cache
// const CACHE_NAME = "v1_cache_victor_requena",
// urlsToCache = [
//     './',
//     'https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css"',
//     'https://fonts.gstatic.com',
//     'https://fonts.googleapis.com/css2?family=Inter:wght@598&display=swap',
//     'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap',
//     'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&family=Signika:wght@700&display=swap',
//     'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
//     'https://kit.fontawesome.com/3e429e9c0c.js" crossorigin="anonymous',
//     './css/style_hamburger.css',
//     './css/styles.css',
//     './css/styles_formulario.css',
//     'js/main.js'
// ]

// //Durante la fase de instalacion, generalmente se almacena en cache los activos estaticos

// self.addEventListener("install", e=> {
//     e.waitUntil(
//         caches.open(CACHE_NAME)
//         .then(cache => {
//             return cache.addAll(urlsToCache)
//             .then(() => self.skipWaiting())
//         })
//         .catch(err => console.warn(err)) 
//     )
// })

// //Una vez que se instale el SW, se activa y busca los recursos para hacer que funcione sin conexion

// self.addEventListener('activate', e => {
//     const cacheWhiteList = [CACHE_NAME]

//     e.waitUntil(
//         caches.keys()
//         .then(cacheNames => {
//             cacheNames.map(cacheName => {
//                 //Eliminemos lo que ya no se necesita en el cache
//                 if(cacheWhiteList.indexOf(cacheName) === -1) {
//                     return caches.delete(cacheName)
//                 }
//             })
//         })
//         //Le inidica SW activar el cache actual
//     )
// })

// self.addEventListener('fetch', e => {
//     //Responde ya sea con el objeto en cache o continar y buscar la url real
//     e.responseWith(
//         caches.match(e.request)
//         .then(res => {
//             if(res) {
//                 //recuperando del cache
//                 return res
//             }

//             //recuperar de la peticio a la url
//             return fetch(e.request)
//         })
//     )


// })