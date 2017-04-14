function validaUser(){
	var inputEmail = $('#user_email');
	var inputSenha = $('#user_password');
	var errors = [];
	if ($(inputEmail).val() == "") {
		$(inputEmail).parent().tooltip({
    				trigger: 'manual',
                    title: 'Por favor, preencha o campo.',
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow fail"></div><div class="tooltip-inner fail"></div></div>',
                    placement: 'top'
    			}).tooltip('show');
		errors.push(1);
		$(inputEmail).on('keyup', function() {
			$(inputEmail).parent().tooltip('hide');
		})
	}
	if ($(inputSenha).val() == "") {
		$(inputSenha).parent().tooltip({
    				trigger: 'manual',
                    title: 'Por favor, preencha o campo.',
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow fail"></div><div class="tooltip-inner fail"></div></div>',
                    placement: 'top'
    			}).tooltip('show');
		errors.push(1);
		$(inputSenha).on('keyup', function() {
			$(inputSenha).parent().tooltip('hide');
		})
	}
	if($('.cadastro').length) {
		if ($('#user_password_confirmation').val() == "") {
			$('#user_password_confirmation').parent().tooltip({
	    				trigger: 'manual',
	                    title: 'Por favor, preencha o campo.',
	                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow fail"></div><div class="tooltip-inner fail"></div></div>',
	                    placement: 'top'
	    			}).tooltip('show');
			errors.push(1);
			$('#user_password_confirmation').on('keyup', function() {
				$('#user_password_confirmation').parent().tooltip('hide');
			})
		}	
	}
	if (errors.length > 0)
		event.preventDefault();				
}

$(document).on('turbolinks:load', function() {
    if($('#new_user').length) {
    	$('#new_user').submit(function(event){
			validaUser();
    	});
    }
});
