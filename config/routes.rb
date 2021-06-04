Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :stores, only: [:create, :show, :index, :update]

  end

  root "static_pages#root"
end
