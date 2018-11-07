class DogsController < ApplicationController

  def index
    if request.path != dogs_path
      redirect_to dogs_path
    end
    @dogs = Dog.all
    # render :sdhjkfakljshdflkhjasdf
  end

  def show
    @dog = Dog.find(params[:id])
  end

  def new
    @dog = Dog.new
    @dog.name = "Graham"
  end

  def create
    @dog = Dog.create(nested_dog_params)
    redirect_to @dog
  end

  def edit
    @dog = Dog.find(params[:id])
  end

  def update
    @dog = Dog.find(params[:id])
    @dog.update(nested_dog_params)
    redirect_to @dog
  end

  def destroy
    Dog.destroy(params[:id])
    redirect_to dogs_path
  end

  private

  def nested_dog_params
    params.require(:dog).permit(:name, :fluffiness)
  end

end