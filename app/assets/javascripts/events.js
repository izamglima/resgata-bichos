function hideMapa(){
	$('#map-canvas').remove();
	$('#event_latitude').val(null);
	$('#event_longitude').val(null);
}
$(document).ready(function() {
	if($('#new_event').length) {
		$('#event_data_event').mask('00/00/0000');

		if($('.new-event').length){
			$('.resolvido').addClass('hidden');
		}
		
		if (window.location.href.indexOf("cadastro") != -1) {
			$('.final').removeClass('hidden');
		}
		if (window.location.href.indexOf("status") > -1 ) {
    		//add status
    	}
	}
});
