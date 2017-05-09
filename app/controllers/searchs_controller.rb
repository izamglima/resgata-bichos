class SearchsController < ApplicationController
	def search
		@animals = Animal.all
		if params[:search]
		    @animals = Animal.search(params[:search]).order("created_at DESC")
		else
		    @animals = Animal.all.order('created_at DESC')
		end
	end
end