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

end