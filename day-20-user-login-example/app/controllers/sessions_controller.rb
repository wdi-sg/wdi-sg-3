class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      # TODO. try .try
      redirect_to root_path, notice: "Logged In"
    else
      flash.now.alert = "invalid login details"
      render "new"
    end
  end

  def destroy
    redirect_to root_path, notice: "Logged Out"
  end
end
