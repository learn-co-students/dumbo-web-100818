class ApplicationController < ActionController::Base

  before_action :setup_voting_attrs

  private
  def setup_voting_attrs
    
    session["votes"] ||= 5
    @votes = session["votes"]

    @can_vote = @votes > 0
    # byebug
    @message = flash[:message]
    @errors = flash[:errors]
  end

  def use_one_vote
    session["votes"] -= 1
  end

end
 

