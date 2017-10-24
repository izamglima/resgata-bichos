function initMap() {
  var element = document.getElementById('map-canvas');

  if (!element) {
    return false;
  }
  var map = new google.maps.Map(element, {
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
      
      if ($('.new_event').length > 0){
      //Set to input hidden
        document.getElementById('event_latitude').value = position.coords.latitude;
        document.getElementById('event_longitude').value = position.coords.longitude;
      }
      
      if ($('#new_adoption').length > 0) {
        document.getElementById('adoption_latitude').value = position.coords.latitude;
        document.getElementById('adoption_longitude').value = position.coords.longitude;
      }
      
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

function showPosition() {
  var element = document.getElementById('mapholder');
  
  if (!element) {
    return false;
  }

  var latitude = $('#lat').val();
  var longitude = $('#long').val();
  
  var map = new google.maps.Map(element, {
    center: {lat: parseFloat(latitude), lng: parseFloat(longitude)},
    zoom: 16
  });
  var infoWindow = new google.maps.InfoWindow({map: map});
  var pos = {
    lat: parseFloat(latitude),
    lng: parseFloat(longitude)
  };
  infoWindow.setPosition(pos);
  infoWindow.setContent('Localização do animal');
}

$(document).ready(function() {
  if ($('.new_event').length > 0 || $('#new_adoption').length > 0)  {
    initMap();
  };
  if($('.show-animal').length > 0) {
    showPosition()
  }
});