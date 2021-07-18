Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy, :show]

    resources :stores, only: [:create, :show, :index, :update] do
      resources :products, only: [:create]
    end
    resources :products, only: [:show, :update, :destroy, :index] do
      resources :reviews, only: [:index, :create]
    end
    resources :cart_items, only: [:index, :create, :update, :destroy]
    resources :search_items, only: [:index]
    resources :reviews, only: [:update]
  end

  root "static_pages#root"
end
