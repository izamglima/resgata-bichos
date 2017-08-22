var endpoint;

if (navigator.serviceWorker) {

	navigator.serviceWorker.register('/serviceworker.js', { scope: './' })
    .then(function(reg) {

		return registration.pushManager.getSubscription()
	  	.then(function(subscription) {
	 
		    if (subscription) {
		      return subscription;
		    }
		 
		    return registration.pushManager.subscribe({ userVisibleOnly: true });
	  	});
  
  	}).then(function(subscription) {
	  endpoint = subscription.endpoint;

	 
		fetch('./register', {
	    	method: 'post',
		    headers: {
		      'Content-type': 'application/json'
		    },
		    body: JSON.stringify({
		      endpoint: subscription.endpoint,
		    }),
	  	});
	});

}

document.getElementById('doIt').onclick = function() {
  var delay = document.getElementById('notification-delay').value;
  var ttl = document.getElementById('notification-ttl').value;
 
  fetch('./sendNotification?endpoint=' + endpoint + '&delay=' + delay +
        '&ttl=' + ttl,
    {
      method: 'post',
    }
  );
};

