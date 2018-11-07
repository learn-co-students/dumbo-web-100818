class StatusReactionsController < ApplicationController


  # def new
  #   @status_reaction = StatusReaction.new
  # end

  def create
    @status_reaction = StatusReaction.create(status_reaction_params)
    if @status_reaction.valid?
      redirect_to @status_reaction.status
    else
      render :new
    end
  end

  private

  def status_reaction_params
    params.require(:status_reaction).permit(:status_id, :reaction_id)
  end

end
