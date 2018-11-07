class ReactionsController < ApplicationController 

  def index
    @reactions = Reaction.all
  end

  def show
    @reaction = Reaction.find(params[:id])
  end

  def new
    @reaction = Reaction.new
  end

  def create
    @reaction = Reaction.create(reaction_params)
    if @reaction.valid?
      redirect_to @reaction
    else
      render :new
    end
  end

  def edit
    @reaction = Reaction.find(params[:id])
  end

  def update
    @reaction = Reaction.find(params[:id])
    if @reaction.update(reaction_params)
      redirect_to @reaction
    else
      render :edit
    end
  end

  def destroy
    Reaction.destroy(params[:id])
    redirect_to reactions_path
  end

  private

  def reaction_params
    params.require(:reaction).permit(:emoji)
  end

end
