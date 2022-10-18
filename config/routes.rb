Rails.application.routes.draw do
  resources :liquors
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # resources :liquor, only: [:index, :create, :update, :destroy]
  get "/liquors", to: "liquors#index"
  post "/liquors", to: "liquors#create"
  patch "/liquors", to: "liquors#update"
  delete "/liquors", to: "liquors#destroy"

  # post "/users", to: "users#create",
  
  # resources :users, only: [:index, :create]
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/auth", to: "users#show"
  get '/me', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'
end
