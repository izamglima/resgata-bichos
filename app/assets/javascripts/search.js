function searchByState(id) {
	$('#state').val(id);	
	$('#search-form').submit();
}
$(document).ready(function() {
	if($('#search-form').length) {
		$('#data_event').mask('00/00/0000');
		
		$('.search-block label').on('click', function(){
			$('.search-block label').removeClass('selected');
			$(this).addClass('selected');
		});

	}
});
