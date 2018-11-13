  class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      log_in_user(@user)
      redirect_to colors_path
    else
      flash[:errors] = [ "Username or password didn't match" ]
      redirect_to new_session_path
    end
  end

  def destroy
    log_out
    redirect_to colors_path
  end

end