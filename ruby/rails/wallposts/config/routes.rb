Rails.application.routes.draw do
  root 'wall#index'

  namespace :api do
    resources :posts, only: [:create, :index]
  end

end
