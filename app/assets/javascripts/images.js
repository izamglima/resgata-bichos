function validateform(){
    var inputImage = $('#image_image');
    var errors = [];
    if ($(inputImage).val() == "") {
        $(inputImage).parent().tooltip({
                    trigger: 'manual',
                    title: 'Por favor, preencha o campo.',
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow fail"></div><div class="tooltip-inner fail"></div></div>',
                    placement: 'top'
                }).tooltip('show');
        errors.push(1);
        $(inputImage).on('change', function() {
            $(inputImage).parent().tooltip('hide');
        })
    }
    if (errors.length > 0)
        return false;            
    return true;
}

function validaImagemExistente(){
    var idAnimal = $('#cadastrados').find(":selected").val();
    $('#next').removeClass('hidden');
    console.log(idAnimal);
    $('#next').attr('href', 'http://localhost:3000/animals/'+idAnimal+'/events/new?status=encontrado');
}

$(document).on('turbolinks:load', function() {
    if($('#form-image').length) {

    	$('.toggleCriation').on('click', function(){
    		$('#exist').toggleClass('hidden');
    		$('#newImage').toggleClass('hidden');
    		$('#new').toggleClass('hidden');
    		$('#exist-container').toggleClass('hidden');
    	});
    	
    	$('#cadastrados').change(function(){
    		validaImagemExistente();
    	});
    }
    if($('.edit-animal').length) {
        $('.select-images').addClass('hidden');
    }
});