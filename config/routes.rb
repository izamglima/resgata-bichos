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
  
  resources :users, only: [:show]

  get '/search' =>'search#search'

  root 'welcome#index'

  get '/.well-known/acme-challenge/:id' => 'welcome#letsencrypt'
  
end
