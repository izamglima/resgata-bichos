module API
  class APIController < ActionController::Base
  	protect_from_forgery with: :exception
  end
end