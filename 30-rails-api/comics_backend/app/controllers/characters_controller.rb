class CharactersController < ApplicationController

  # GET /characters => "index" action
  # Get all of this resource
  def index
    @characters = Character.all
    render json: @characters
  end

  def show
    # GET /character/:id = > "show" action
    # Gets a specific character
    @character = Character.find(params[:id])

    render json: @character
  end

  def create
    # POST /characters => "create" action
    # Handles creating a character
    # byebug
    # MUST USE STRONG PARAMS
    @character = Character.create(character_params)
    render json: @character
  end

  private
  def character_params
    params.require(:character).permit(:name, :alias, :power, :weakness)
  end
end
