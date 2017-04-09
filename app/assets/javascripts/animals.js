function validaAnimal(){
	var inputNome = $('#animal_name');
	var inputRaca = $('#animal_race');
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
	if ($(inputRaca).val() == "") {
		$(inputRaca).parent().tooltip({
    				trigger: 'manual',
                    title: 'Por favor, preencha o campo.',
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow fail"></div><div class="tooltip-inner fail"></div></div>',
                    placement: 'top'
    			}).tooltip('show');
		errors.push(1);
		$(inputRaca).on('keyup', function() {
			$(inputRaca).parent().tooltip('hide');
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
	console.log(errors.length);
	if (errors.length > 0) {
		event.preventDefault();
		console.log('tem erros');
	}
}

function changeSelects(){
	var inputType = $('#type');
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
    	console.log('sdasdas1');
    	$('#new_animal').submit(function(event){
    		console.log('sdasdas2');
			validaAnimal();
    	});

    	$('#type').change(function(){
    		changeSelects();
    	});
    }
});
