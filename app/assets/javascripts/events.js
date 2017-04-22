$(document).on('turbolinks:load', function() {
	$('#event_data_event').mask('00/00/0000');

	if($('.new-event').length){
		$('.resolvido').addClass('hidden');
	}
});