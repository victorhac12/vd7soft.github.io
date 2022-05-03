

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
    .then( reg =>{

        setTimeout(() => {
            reg.sync.register('posteo-gatitos');
            console.log('Se enviaron fotos de gatitos al server');
        }, 3000);
    });
}

//Sample 1
/*
fetch('https://reqres.in/api/users')
.then(resp => resp.text())
.then(console.log);
*/

// Sample 2: SYNC
// if (window.SyncManager){}
