function initMap() {
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 12
    });
    var infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        //Set to input hidden
        document.getElementById('event_lat').value = position.coords.latitude;
		document.getElementById('event_lng').value = position.coords.longitude;

        infoWindow.setPosition(pos);
        infoWindow.setContent('Usar esta localização.');
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
 }

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
}

$(document).on('turbolinks:load', function() {
	if (window.google && window.google.maps) {
		
	};
});