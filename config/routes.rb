Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    resources :cities, except: [:new, :edit, :update, :destroy, :create]
  end
  get '/home' => 'home#index'
  get '/home#' => 'home#index'
  root 'home#index'
end
