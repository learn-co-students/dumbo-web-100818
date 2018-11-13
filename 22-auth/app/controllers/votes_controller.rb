class VotesController < ApplicationController

  skip_before_action :verify_authenticity_token


  # before_action :authenticate #, only: [:create]

  def index
    @all_votes = User.find(logged_in_user_id).votes
  end

  def create
    if @can_vote
      # use_one_vote
      @vote = Vote.create(color_id: params[:color_id], user_id: logged_in_user_id)
      flash[:message] = "Thank you for voting for ##{ @vote.color.hex }!";
    else
      flash[:errors] = ["You're out of votes 💁‍♀️"] # for the next #{ @user.seconds_until_next_vote } seconds 💁‍♀️"];
    end
    redirect_to colors_path
  end

  def destroy
    @vote = Vote.find(params[:id])
    if authorized?(@vote.user_id)
      redirect_to new_session_path
    else
      @vote.destroy
      redirect_to votes_path
    end
  end

  private 
  def authenticate
    if !logged_in?
      redirect_to new_session_path
    end
  end


end


# 