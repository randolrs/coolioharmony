Rails.application.routes.draw do
  # devise_for :users
  devise_for :users, controllers: {sessions: "sessions"}
  root 'pages#home'
  # get 'app', to: 'events#index'
  get 'logged_in', to: 'pages#is_logged_in?'
end
