class ApplicationController < ActionController::Base

  before_action :setup_voting_attrs

  private
  def setup_voting_attrs

    @votes = 5
    @can_vote = true

    # @message = flash[:message]
    # @errors = flash[:errors]
  end




end
 

