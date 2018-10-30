class VegetablesController < ApplicationController

  get "/vegetables" do
    @query = params[:qqqqqqqqqqqqqqqqq]
    @vegetables = Vegetable.search(@query)
    erb :index
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
    erb :new
  end


  get '/vegetables/:id' do
    # binding.pry
    @vegetable = Vegetable.find(params[:id])
    erb :show
  end



  post "/vegetables" do
    # @vegetable = Vegetable.new
    # @vegetable.name = params[:name]
    # @vegetable.emoji = params[:emoji]
    # @vegetable.save
    # @vegetable = Vegetable.create({ name: params[:name], emoji: params[:emoji] })
    @vegetable = Vegetable.create(params)
    redirect to "/vegetables/#{ @vegetable.id }"
  end

end