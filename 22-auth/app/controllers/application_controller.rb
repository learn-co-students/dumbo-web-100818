class ApplicationController < ActionController::Base

  before_action :setup_voting_attrs

  private
  def setup_voting_attrs
    
    # session["votes"] ||= 5
    # @votes = session["votes"]

    @logged_in = logged_in?

    @votes = 0
    if logged_in?
      @user = User.find(logged_in_user_id)
      @votes = @user.remaining_votes
    end

    @can_vote = @votes > 0
    # byebug
    @message = flash[:message]
    @errors = flash[:errors]
  end

  def log_in_user(user)
    session[:user_id] = user.id
  end

  def log_out
    session[:user_id] = nil
  end

  def logged_in_user_id
    session[:user_id]
  end

  def logged_in?
    !!logged_in_user_id
  end

  def authorized?(user_id)
    logged_in_user_id == user_id
  end

  # def use_one_vote
  #   session["votes"] -= 1
  # end

end
 

