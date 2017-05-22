
function validateImage(){
    var idAnimal = $('#cadastrados').find(":selected").val();
    var url = window.location.href;
    var hasLocalhost = window.location.href.indexOf("localhost") > -1 ;
    var myParam = location.search.split('status=')[1];
    $('#next').removeClass('hidden');
    if(hasLocalhost){
        $('#next').attr('href', 'http://localhost:3000/animals/'+idAnimal+'/events/new?status='+myParam);
    }
    else {        
        $('#next').attr('href', url+'/animals/'+idAnimal+'/images/new?status='+myParam);
    }
}
$('#new_image').submit(function(){ 
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
});

$(document).ready(function() {
    if($('#form-image').length) {
    	
    	$('#cadastrados').change(function(){
    		validateImage();
    	});
    }
    if($('.edit-animal').length) {
        $('.select-images').addClass('hidden');
    }
});