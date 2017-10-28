class SearchController < ApplicationController
	def search
		@countAll = Event.count + Adoption.count
		@countLosts = Event.where(status: 'perdido').count
		@countFounds = Event.where(status: 'encontrado').count
		@countAdoptions = Adoption.count
	end
end