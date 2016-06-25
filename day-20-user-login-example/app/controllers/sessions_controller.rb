class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:email])
    # if user && user.authenticate(params[:password])
    if user.try(:authenticate, params[:password]) #example
      session[:user_id] = user.id
      redirect_to root_path, notice: "Logged In"
    else
      flash.now.alert = "invalid login details"
      render "new"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "Logged Out"
  end
end
