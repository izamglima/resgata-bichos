module API
  class SearchController < APIController
  	def index
  	  render json: Event.all
  	end
  end
end