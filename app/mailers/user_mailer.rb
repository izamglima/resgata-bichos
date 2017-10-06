class UserMailer < ActionMailer::Base
	default from: ENV['GMAIL_USERNAME']
	
	def welcome_email(user)
		@user = user
		@url  = 'http://resgatabichos.herokuapp.com/users/sign_in'
		mail(to: @user.email, subject: 'Bem vindo ao Resgata Bichos!')
	end
	
end
