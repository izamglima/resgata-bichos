//Register the ServiceWorker
if (navigator.serviceWorker) {
	if (navigator.serviceWorker.controller) {
		console.log('[PWA Builder] active service worker found, no need to register')
	} else {
		navigator.serviceWorker.register('/serviceworker.js', { scope: './' })
    	.then(function(reg) {
			console.log('Service Worker registration sucessful!');
  		})
	}
}

Notification.requestPermission(function(status) {
  console.log('Notification permission status:', status);
});

// if (Notification.permission == 'granted') {
//   navigator.serviceWorker.getRegistration().then(function(reg) {

//     var options = {
// 	  body: 'Obrigada por se registrar no Resgata Bichos!',
// 	  //icon: 'images/notification-flat.png',
// 	  vibrate: [100, 50, 100],
// 	  data: {
// 	    dateOfArrival: Date.now(),
// 	    primaryKey: 1
// 	  },

// 	};

//     reg.showNotification('Olá, bem vindo!', options);
//   });
// }