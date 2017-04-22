function validaAnimal(){
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
		event.preventDefault();				
}

function validaAnimalExistente(){
	var idAnimal = $('#cadastrados').find(":selected").val();
	$('#next').removeClass('hidden');
	$('#next').attr('href', 'http://localhost:3000/animals/'+idAnimal+'/images/new');
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
    	
    	$('#new_animal').submit(function(event){
			validaAnimal();
    	});

    	$('#animal_animal_type').change(function(){
    		changeSelects();
    	});

    	$('.toggleCriation').on('click', function(){
    		$('#exist').toggleClass('hidden');
    		$('#newAnimal').toggleClass('hidden');
    		$('#new').toggleClass('hidden');
    		$('#exist-container').toggleClass('hidden');
    	});
    	
    	$('#cadastrados').change(function(){
    		validaAnimalExistente();
    	});
    }
});
