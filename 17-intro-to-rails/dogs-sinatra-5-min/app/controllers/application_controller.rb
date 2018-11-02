require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/dogs" do
    @dogs = Dog.all
    erb :index
  end

  get "/dogs/new" do
    @dog = Dog.new
    erb :new
  end

  get "/dogs/:id" do
    @dog = Dog.find(params[:id])
    erb :show
  end

  post "/dogs" do
    @dog = Dog.create(params[:dog])
    redirect to "/dogs/#{ @dog.id }"
  end

  get "/dogs/:id/edit" do
    @dog = Dog.find(params[:id])
    erb :edit
  end

  patch "/dogs/:id" do
    @dog = Dog.find(params[:id])
    @dog.update(params[:dog])
    redirect to "/dogs/#{ @dog.id }"
  end


  delete "/dogs/:id" do
    @dog = Dog.find(params[:id])
    @dog.delete
    redirect to "/dogs"
  end



end
