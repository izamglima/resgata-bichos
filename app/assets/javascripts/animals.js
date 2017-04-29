function validateform(){
	var inputNome = $('#animal_name');
	var inputCor = $('#animal_color');
	var errors = [];
	if ($(inputNome).val() == "") {
		$(inputNome).parent().tooltip({
    				trigger: 'manual',
                    title: 'Por favor, preencha o campo.',
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow fail"></div><div class="tooltip-inner fail"></div></div>',
                    placement: 'top'
    			}).tooltip('show');
		errors.push(1);
		$(inputNome).on('keyup', function() {
			$(inputNome).parent().tooltip('hide');
		})
	}
	if ($(inputCor).val() == "") {
		$(inputCor).parent().tooltip({
    				trigger: 'manual',
                    title: 'Por favor, preencha o campo.',
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow fail"></div><div class="tooltip-inner fail"></div></div>',
                    placement: 'top'
    			}).tooltip('show');
		errors.push(1);
		$(inputCor).on('keyup', function() {
			$(inputCor).parent().tooltip('hide');
		})
	}
	
	if (errors.length > 0)
		return false;
	return true;	
}

function validaAnimalExistente(){
	var idAnimal = $('#cadastrados').find(":selected").val();
	var myParam = location.search.split('status=')[1];
	$('#next').removeClass('hidden');
	$('#next').attr('href', 'http://localhost:3000/animals/'+idAnimal+'/images/new?status='+myParam);
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

$(document).on('turbolinks:load', function() {
    if($('#form-animal').length) {

    	$('#animal_animal_type').change(function(){
    		changeSelects();
    	});
    	
    	$('#cadastrados').change(function(){
    		validaAnimalExistente();
    	});
    }


    //used in all forms 
	$('.toggleCriation').on('click', function(){
		$('#exist').toggleClass('hidden');
		$('#newItem').toggleClass('hidden');
		$('#new').toggleClass('hidden');
		$('#exist-container').toggleClass('hidden');
	});
});
