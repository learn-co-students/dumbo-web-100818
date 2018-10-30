class VegetablesController < ApplicationController

  get "/vegetables" do
    @query = params[:qqqqqqqqqqqqqqqqq]
    @vegetables = Vegetable.search(@query)
    erb :index
  end



end