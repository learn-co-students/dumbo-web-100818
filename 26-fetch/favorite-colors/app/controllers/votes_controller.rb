class VotesController < ApplicationController

  # POST /votes
  def create
    @vote = Vote.new(vote_params)

    if @vote.save
      render json: @vote
    else
      render json: @vote.errors, status: :unprocessable_entity
    end
  end


  private
    # Only allow a trusted parameter "white list" through.
    def vote_params
      params.permit(:color_id)
    end
end
