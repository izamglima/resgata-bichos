
function validateAnimal(){
	var idAnimal = $('#cadastrados').find(":selected").val();
	var myParam = location.search.split('status=')[1];
	var url = window.location.href;
    var hasLocalhost = window.location.href.indexOf("localhost") > -1 ;
	$('#next').removeClass('hidden');
	if(hasLocalhost)
		$('#next').attr('href', 'http://localhost:3000/animals/'+idAnimal+'/images/new?status='+myParam);
	else
		$('#next').attr('href', url+'/animals/'+idAnimal+'/images/new?status='+myParam);
}	

function changeSelects(){
	var inputType = $('#animal_animal_type');
	if ($(inputType).val() == "Gato") {
		$('#dogs-list').addClass('hidden');
		$('#cats-list').removeClass('hidden');
	}
	if ($(inputType).val() == "Cão") {
		$('#cats-list').addClass('hidden');
		$('#dogs-list').removeClass('hidden');
	}
}


function toggleCreation() {
	$('#exist').toggleClass('hidden');
	$('#newItem').toggleClass('hidden');
	$('#new').toggleClass('hidden');
	$('#exist-container').toggleClass('hidden');	
}

function callTollTip(input) {
	$(input).parent().tooltip({
		trigger: 'manual',
        title: 'Por favor, preencha o campo.',
        template: '<div class="tooltip" role="tooltip">'+
        		  	'<div class="tooltip-arrow fail">'+
        		  '</div>'+
        		  '<div class="tooltip-inner fail"></div></div>',
        placement: 'top'
	}).tooltip('show');	
}

$('#new_animal').submit(function(){
	var inputNome = $('#animal_name');
	var inputCor = $('#animal_color');
	var animalColor = $('#animal_color');
	
	var errors = [];
	if ($(inputNome).val() == "") {
		callTollTip(inputNome);
		
		errors.push(1);
		$(inputNome).on('keyup', function() {
			$(inputNome).parent().tooltip('hide');
		})
	}
	if ($(inputCor).val() == "") {
		callTollTip(inputCor);

		errors.push(1);
		$(inputCor).on('keyup', function() {
			$(inputCor).parent().tooltip('hide');
		})
	}
	if ($(animalColor).val() == "") {
		callTollTip(animalColor);		
		
		errors.push(1);
		$(animalColor).on('keyup', function() {
			$(animalColor).parent().tooltip('hide');
		})
	}
	if (errors.length > 0)
		return false;
	return true;	
});

$(document).ready(function() {

    if($('#form-animal').length) {
    	$('#animal_age').mask('00');

    	$('#animal_animal_type').change(function(){
    		changeSelects();
    	});
    	
    	$('#cadastrados').change(function(){
    		validateAnimal();
    	});
    }

    if ($('#notice').val() === "") {
    	$('.alert').addClass('hidden');
    }
});
