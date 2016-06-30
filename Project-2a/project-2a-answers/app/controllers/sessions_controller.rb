class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to home_path
    else
      redirect_to sign_in_path, alert: "Couldn't sign you in. Please check your email and password."
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to home_path, notice: 'Signed out successfully'
  end
end
