class SearchsController < ApplicationController
	def search
	    @animals = Animal.search(search_params).order("created_at DESC")
	end

	private

	def search_params
		params.fetch(:search, {}).permit(:animal_type, :sex, :size)
	end
end