class VotesController < ApplicationController

  # skip_before_action :verify_authenticity_token

  def create
    if @can_vote
      use_one_vote
      @vote = Vote.create(color_id: params[:color_id])
      flash[:message] = "Thank you for voting for ##{ @vote.color.hex }!";
    else
      flash[:errors] = ["You're out of votes 💁‍♀️"] # for the next #{ @user.seconds_until_next_vote } seconds 💁‍♀️"];
    end
    redirect_to colors_path
  end



end


# 