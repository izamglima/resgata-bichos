class SearchsController < ApplicationController
	def search
		@animals = Animal.all
		if params[:tipo_animal]
		    @animals = Animal.where(params[:tipo_animal], params[:sex], params[:size]).order("created_at DESC")
		    byebug
		else
		    @animals = Animal.all.order('created_at DESC')
		end
	end
end