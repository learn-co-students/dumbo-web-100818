class StatusReactionsController < ApplicationController


  # def new
  #   @status_reaction = StatusReaction.new
  # end

  def create
    @status_reaction = StatusReaction.create(status_reaction_params)
    redirect_to @status_reaction.status
  end

  private

  def status_reaction_params
    params.require(:status_reaction).permit(:status_id, :reaction_id)
  end

end
