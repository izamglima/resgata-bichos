function searchByState(id) {
	$('#state').val(id);	
	$('#search-form').submit();
}

function changeSelectsSearch(){
	var inputType = $('#animal_type');
	if ($(inputType).val() == "Gato") {
		$('#dogs-list').addClass('hidden');
		$('#cats-list').removeClass('hidden');
	}
	if ($(inputType).val() == "Cão") {
		$('#cats-list').addClass('hidden');
		$('#dogs-list').removeClass('hidden');
	}	
}

$(document).ready(function() {
	if($('#search-form').length) {
	
		$('#data_event').mask('00/00/0000');
		
		$('.search-block label').on('click', function(){
			$('.search-block label').removeClass('selected');
			$(this).addClass('selected');
		});


		$('#animal_type').change(function(){
			changeSelectsSearch();
		});
    
	}
});
