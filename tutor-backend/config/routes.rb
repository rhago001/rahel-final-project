Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users
  resources :appointments
  resources :reviews
  resources :posts
  resources :comments

  post '/login', to: 'auth#create'
  # get '/users/:id', to: 'users#show'
  get '/profile', to: 'users#show'
  get '/tutors', to: 'tutors#index'
  get '/tutors/:id', to: 'tutors#show'
  get '/reviews', to: 'reviews#index'
  get '/appointments', to: 'appointments#index'
  get '/appointments/new', to: 'appointments#create'
  get '/reviews/new', to: 'reviews#create'
  get '/reviews/:id/edit', to: 'reviews#edit'
  patch '/reviews/:id', to: 'reviews#update'
  get '/appointments/:id/edit', to: 'appointments#edit'
  patch '/appointments/:id', to: 'appointments#update'


end
