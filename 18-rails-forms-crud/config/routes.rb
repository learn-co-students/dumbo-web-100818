Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get "/dogs", to: "dogs#index"
  # get "/dogs/:id", to: "dogs#show", as: "dog"


  # resources :dogs, only: [:index, :show, :new, :create, :edit, :update]
  resources :dogs

  root "dogs#index"

end
