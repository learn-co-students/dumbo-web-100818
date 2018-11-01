class VegetablesController < ApplicationController

  # before_action :fetch_vegetable, only: [:show, :edit, :update]


  # def fetch_vegetable
  #   @vegetable = Vegetable.find(params[:id])
  # end

  get "/vegetables" do
    @query = params[:qqqqqqqqqqqqqqqqq]
    @vegetables = Vegetable.search(@query)
    erb :"vegetables/index"
  end

  # get '/vegetables/7' do
  #   # Vegetable.all.find do |veggie|
  #   #   veggie.id == 7
  #   # end
  #   # Vegetable.where(id: 7)
  #   @vegetable = Vegetable.find(7)
  #   erb :show
  # end

  # get '/vegetables/6' do
  #   @vegetable = Vegetable.find(6)
  #   erb :show
  # end


  get "/vegetables/new" do
    @farmers = Farmer.all
    @vegetable = Vegetable.new
    erb :"vegetables/new"
  end

  #show
  get '/vegetables/:id' do
    # binding.pry
    @vegetable = Vegetable.find(params[:id])
    erb :"vegetables/show"
  end



  post "/vegetables" do
    # @vegetable = Vegetable.new
    # @vegetable.name = params[:name]
    # @vegetable.emoji = params[:emoji]
    # @vegetable.save
    # @vegetable = Vegetable.create({ name: params[:name], emoji: params[:emoji] })
    @vegetable = Vegetable.create(params[:vegetable])
    redirect to "/vegetables/#{ @vegetable.id }"
  end

  #edit
  get '/vegetables/:id/edit' do
    # @vegetable = Vegetable.find_by(id: params[:id])
    # @vegetable_id = params[:id]
    @farmers = Farmer.all
    @vegetable = Vegetable.find(params[:id])
    erb :"vegetables/edit"
  end

  patch "/vegetables/:id" do
    @vegetable = Vegetable.find(params[:id])
    # params.delete("_method")
    @vegetable_params = params[:vegetable]
    @vegetable.update(@vegetable_params)
    redirect to "/vegetables/#{ @vegetable.id }"
  end

  delete "/vegetables/:id" do
    Vegetable.destroy(params[:id])
    redirect to "/vegetables"
  end

  # {
  #   name: "Horse",
  #   emoji: "🐎",
  #   _method: "PATCH",
  #   id: 16
  # }

  # {
  #   horse: {
  #     name: "Horse",
  #     emoji: "🐎"
  #   },
  #   _method: "PATCH",
  #   id: 16
  # }

end