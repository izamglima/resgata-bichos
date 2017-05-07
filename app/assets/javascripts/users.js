function validateform(){
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
		var inputNome = $('#user_name');
		var inputPass = $('#user_password_confirmation');
		
		if ($(inputPass).val() == "") {
			$(inputPass).parent().tooltip({
	    				trigger: 'manual',
	                    title: 'Por favor, preencha o campo.',
	                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow fail"></div><div class="tooltip-inner fail"></div></div>',
	                    placement: 'top'
	    			}).tooltip('show');
			errors.push(1);
			$(inputPass).on('keyup', function() {
				$(inputPass).parent().tooltip('hide');
			})
		}
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
	}
	if (errors.length > 0)
		return false;
	return true;				
}

$(document).ready(function() {
    if($('#new_user').length) {
    	$('#new_user').submit(function(event){
			validaUser();
    	});
    }
});
