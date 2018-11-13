class SessionsController < ApplicationController


  def new

  end


  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      # yay you are logged in!!!!!!
      log_in_user(@user.id)
      redirect_to colors_path
    else
      # buzz off
      flash[:errors] = [ "That doesn't match anything we have in our database." ]
      redirect_to new_session_path
    end
  end


end