Rails.application.routes.draw do
  resources :expenses
  resources :users
  #get '/test', to: 'application#test'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
