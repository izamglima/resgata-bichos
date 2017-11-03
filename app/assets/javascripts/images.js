
function validateImage(){
    var idAnimal = $('#cadastrados').find(":selected").val();
    var url = window.location.href;
    var host = window.location.host;
    var hasLocalhost = window.location.href.indexOf("localhost") > -1 ;
    var myParam = location.search.split('status=')[1];
    $('#next').removeClass('hidden');
    if (myParam == "adoption") {
        if(hasLocalhost){
            $('#next').attr('href', 'http://localhost:3000/animals/'+idAnimal+'/adoptions/new?status='+myParam);
        }
        $('#next').attr('href', '/animals/'+idAnimal+'/adoptions/new?status='+myParam);
        return
    }
    if(hasLocalhost){
        $('#next').attr('href', 'http://localhost:3000/animals/'+idAnimal+'/events/new?status='+myParam);
    }
    else {        
        $('#next').attr('href', '/animals/'+idAnimal+'/events/new?status='+myParam);
    }
}
$('#new_image').submit(function(){ 
    var inputImage = $('#image_image');
    var errors = [];
    if ($(inputImage).val() == "") {
        callTollTip(inputImage);
        
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