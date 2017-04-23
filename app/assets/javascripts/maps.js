var Maps = (function (module) {
	module.init = function() {
		var element = document.getElementById('map-canvas');
		if (!element) {
			return false;
		};

		//map options
		var options = {
			center: {
				lat: -34.397,
				lng: 150.644
			},
			zoom: 10
		};

		var map = new google.maps.Map(element, options);
	};

	return module;
}(Maps || {}));

$(document).on('turbolinks:load', function() {
	if (window.google && window.google.maps) {
		Maps.init();
	};
});