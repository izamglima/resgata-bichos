Rails.application.routes.draw do

  namespace :api do
    resources :search
  end
  
  resources :animals do
  	resources :images
  end
  
  resources :animals do
  	resources :events
  end

  devise_for :users, controllers: { registrations: "registrations" }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'welcome#index'

  get '/search' =>'searchs#search'

  get '/.well-known/acme-challenge/:id' => 'welcome#letsencrypt'
  
end
