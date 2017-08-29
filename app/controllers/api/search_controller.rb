module API
  class SearchController < ActionController::Base
  	protect_from_forgery with: :exception
  	
  	def index
  	  render json: Event.all
  	end
  end
end