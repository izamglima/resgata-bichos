Rails.application.routes.draw do

  namespace :api do
    get '/search' => 'search#index'
    get '/search/adoptions' => 'search#adoptions'
  end
  
  resources :animals do
  	resources :images
  end
  
  resources :animals do
  	resources :events
  end

  resources :animals do
    resources :adoptions
  end

  resources :comments


  devise_for :users, controllers: { registrations: "registrations" }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'welcome#index'

  get '/.well-known/acme-challenge/:id' => 'welcome#letsencrypt'
  
end
