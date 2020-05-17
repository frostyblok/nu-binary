Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/users/signup" => "users#signup"
  post "/users/signin" => "users#signin"

  post '/calculations' => 'calculation#is_continuous'
  get '/calculations' => 'calculation#user_calculations'
end
