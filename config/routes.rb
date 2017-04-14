Rails.application.routes.draw do
  resources :animals do
  	resources :images
  end
  devise_for :users, controllers: { registrations: "registrations" }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'welcome#index'
end
