
if (navigator.serviceWorker) {

	navigator.serviceWorker.register('/serviceworker.js', { scope: './' })
    .then(function(reg) {
		console.log('Service Worker registration sucessful!');
  	})
}

Notification.requestPermission(function(status) {
  console.log('Notification permission status:', status);
});

if (Notification.permission == 'granted') {
  navigator.serviceWorker.getRegistration().then(function(reg) {

    var options = {
	  body: 'First notification!',
	  //icon: 'images/notification-flat.png',
	  vibrate: [100, 50, 100],
	  data: {
	    dateOfArrival: Date.now(),
	    primaryKey: 1
	  },

	  // TODO 5.1 - add a tag to the notification

	};

    reg.showNotification('Hello world!', options);
  });
}