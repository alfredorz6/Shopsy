Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy, :show]

    resources :stores, only: [:create, :show, :index, :update] do
      resources :products, only: [:create]
    end
    resources :products, only: [:show, :update, :destroy, :index]

  end

  root "static_pages#root"
end
