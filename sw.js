
// Ciclo de vida del SW

self.addEventListener('install', evento => {

    // Descargar assets
    // Creamos un cache
    console.log('Instalando SW');
    //self.skipWaiting(); // Usarlo con cuidado
    // porque no sabemos lo que está haciendo
    // en ese momento el usuario y podemos
    // interrumpirlo

    const instalacion = new Promise ((resolve, reject) => {

        setTimeout(() => {
        
            console.log('SW: Instalaciones terminadas')
            self.skipWaiting (); // de modo ilustrativo
            resolve();

        }, 1);
    
    });

    evento.waitUntil(instalacion);

});

// Cuando el SW toma el control de la app
self.addEventListener('activate', evento => {

    //Borrar cache viejo

    console.log('SW2: Activo y listo para controlar la APP');
});

// Sample 1
// Fetch: Manejo de peticiones HTTP
/*
self.addEventListener('fetch', evento =>{

    //Aplicar estrategias del cache

    
    console.log('SW:', evento.request.url);

    if (evento.request.url.includes('https://reqres.in')){

        const resp = new Response (`{ok: false, mensaje: 'jajaja'}`);
        evento.respondWith (resp);
    }
});

*/

// Sample 2
// SYNC: Recuperamos la conexión a internet
self.addEventListener('sync', evento => {

    console.log('Tenemos conexión');
    console.log(evento);
    console.log(evento.tag);
    


});