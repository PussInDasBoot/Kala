Rails.application.routes.draw do
  get 'auth/:provider/callback', to: 'sessions#create'
  get '/auth/failure', to: 'sessions#failure'
  get '/logout', to: 'sessions#destroy', as: 'logout'
  get '/login', to: 'sessions#new', as: 'login'
  
  get '/get_user_events', to: 'kalas#get_user_events'
  
  resources :studios, only: [:index]
  resource :kala, only: [:show]
  root 'kalas#show'
end
