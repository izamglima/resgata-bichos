function hideMapa(){
	$('#map-canvas').hide();
	$('#event_latitude').val(null);
	$('#event_longitude').val(null);
}

function showMapa() {
    $('#map-canvas').show();
    initMap();
    showPosition();
}

$('#new_event').submit(function(){ 
    var inputDate = $('#event_data_event');
    var inputComment = $('#event_comment');
    var errors = [];
    if ($(inputDate).val() == "") {
    	callTollTip(inputDate);
        
        errors.push(1);
        $(inputDate).on('change', function() {
            $(inputDate).parent().tooltip('hide');
        })
    }
    if ($(inputComment).val() == "") {
    	callTollTip(inputComment);
        
        errors.push(1);
        $(inputComment).on('change', function() {
            $(inputComment).parent().tooltip('hide');
        })
    }
    if (errors.length > 0)
        return false;            
    return true;
});

$(document).ready(function() {
	if($('#new_event').length) {

		if($('.new-event').length){
			$('.resolvido').addClass('hidden');
            $('#event_data_event').mask('00/00/0000');
		}
		
		if (window.location.href.indexOf("cadastro") != -1) {
			$('.final').removeClass('hidden');
		}
	}
    $('[data-toggle="popover"]').popover();
});
