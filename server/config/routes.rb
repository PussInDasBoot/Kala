Rails.application.routes.draw do
  get 'auth/:provider/callback', to: 'sessions#create'
  get '/auth/failure', to: 'sessions#failure'
  get '/logout', to: 'sessions#destroy', as: 'logout'
  get '/login', to: 'sessions#new', as: 'login'

  # Retrieve the user's name, profile picture, and email
  get '/current_user/info', to: 'users#current_user_info'

  # Retrieves all of the studios and renders them in JSON
  resources :studios, only: [:index]

  # Add a Yoga Class to a user's Google Calendar
  get '/add_class_to_calendar/:id', to: 'yoga_classes#add_class_to_calendar'
  
  # Retrieve the events from the user's Google calendar and render them in JSON
  get '/get_user_events', to: 'kalas#get_user_events'

  # Retrieve the Yoga classes that aren't in the user's busy time and render them in JSON
  get '/classes_outside_busy_time', to: 'kalas#get_classes_outside_busy_time'
  
  # Retrieve the main Kala page (calendar, filter menu, map, etc...)
  get '/kala', to: 'kalas#show', as: 'kala'
  
  # Kala's landing page for login
  root 'kalas#landing_page'
end
