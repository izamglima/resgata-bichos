function validateform(){
	var inputEmail = $('#user_email');
	var inputSenha = $('#user_password');
	var errors = [];
	
	if ($(inputEmail).val() == "") {
		callTollTip(inputEmail);

		errors.push(1);
		$(inputEmail).on('keyup', function() {
			$(inputEmail).parent().tooltip('hide');
		})
	}

	if ($(inputSenha).val() == "") {
		callTollTip(inputSenha);

		errors.push(1);
		$(inputSenha).on('keyup', function() {
			$(inputSenha).parent().tooltip('hide');
		})
	}

	if($('.cadastro').length) {
		var inputNome = $('#user_name');
		var inputPass = $('#user_password_confirmation');
		
		if ($(inputPass).val() == "") {
			callTollTip(inputPass);

			errors.push(1);
			$(inputPass).on('keyup', function() {
				$(inputPass).parent().tooltip('hide');
			})
		}
		if ($(inputNome).val() == "") {
			callTollTip(inputNome);
			
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
