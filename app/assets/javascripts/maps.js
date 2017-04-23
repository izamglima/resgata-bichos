(function (window, google) {
	//map options
	var options = {
		center: {
			lat: -34.397,
			lng: 150.644
		},
		zoom: 10
	},
	element = document.getElementById('map-canvas'),
	//map
	map = new google.maps.Map(element, options);
}(window, window.google));