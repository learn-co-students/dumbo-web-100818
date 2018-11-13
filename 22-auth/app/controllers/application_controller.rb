class ApplicationController < ActionController::Base

  before_action :setup_voting_attrs

  private
  def setup_voting_attrs

    if session[:user_id]
      @user = User.find(session[:user_id])
      @votes = @user.remaining_votes
      @can_vote = @votes > 0
    end

    @logged_in = !!@user

    @message = flash[:message]
    @errors = flash[:errors]
  end

  def log_in_user(user_id)
    session[:user_id] = user_id
  end

  def logged_in_user_id
    session[:user_id]
  end

  
  

  def authorized?(user_id)
    logged_in_user_id == user_id
  end

  # def use_one_vote
  #   # flash[:votes] = @votes - 1
  # end 

end


# 

