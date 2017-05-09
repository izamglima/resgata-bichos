class SearchsController < ApplicationController
	def search
		@animals = Animal.all
		if params[:animal_type]
		    @animals = Animal.search(params[:animal_type]).order("created_at DESC")
		else
		    @animals = Animal.all.order('created_at DESC')
		end
	end
end