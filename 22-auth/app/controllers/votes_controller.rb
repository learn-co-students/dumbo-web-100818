class VotesController < ApplicationController

  # skip_before_action :verify_authenticity_token

  before_action :authenticate!, only: [:create, :index]

  def create
    if @can_vote
      # use_one_vote
      @vote = Vote.create(color_id: params[:color_id], user_id: logged_in_user_id)
      flash[:message] = "Thank you for voting for ##{ @vote.color.hex }!";
    else
      flash[:errors] = ["You're out of votes for the next #{ @user.seconds_until_next_vote } seconds 💁‍♀️"];
    end
    redirect_to colors_path
  end


  def index
    if authorized?(params[:user_id])
      @votes_i_made = Vote.where(user_id: logged_in_user_id)
    else
      redirect_to new_session_path
    end
  end


  private

  def authenticate!
    if !@logged_in
      flash[:errors] = ["Unable to vote unless logged in"]
      redirect_to new_session_path
    end
  end


end


# 