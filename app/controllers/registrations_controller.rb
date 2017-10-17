class RegistrationsController < Devise::RegistrationsController
  protected

  def sign_up_params  
	params.require(:user).permit(:name, :email, :password, :password_confirmation)
	# Sends email to user when acc is created.
    #UserMailer.welcome_email(@user).deliver_now --testar
  end
end	