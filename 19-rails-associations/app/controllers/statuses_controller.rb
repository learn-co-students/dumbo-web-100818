class StatusesController < ApplicationController 

  def index
    @statuses = Status.all
  end

  def show
    @status = Status.find(params[:id])
    @status_reaction = StatusReaction.new
    @reactions = Reaction.all
  end

  def new
    @status = Status.new
  end

  def create
    @status = Status.create(status_params)
    redirect_to @status
  end

  def edit
    @status = Status.find(params[:id])
  end

  def update
    @status = Status.find(params[:id])
    @status.update(status_params)
    redirect_to @status
  end

  def destroy
    Status.destroy(params[:id])
    redirect_to statuses_path
  end

  private

  def status_params
    params.require(:status).permit(:body)
  end

end
