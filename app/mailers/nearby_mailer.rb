class NearbyMailer < ActionMailer::Base
	default from: ENV['GMAIL_USERNAME']

	def region_email(user, animal, animal_add)
		@user = user 
		@animal = animal
		@animal_add = animal_add
		
		mail(to: @user.email, subject: 'Foi adicionado um novo animal encontrado na região')
	end
end
