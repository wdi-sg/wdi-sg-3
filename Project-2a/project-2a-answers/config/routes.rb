Rails.application.routes.draw do
  get 'sign_up', to: 'users#new', as: :sign_up

  resources :users, only: [:new, :create] do
    resources :posts
  end

  get 'sessions/new', as: :sign_in
  post 'sessions/create', as: :create_session
  post 'sessions/destroy', as: :sign_out


  get '/', to: 'home#index', as: :home
end
