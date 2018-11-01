class FarmersController < ApplicationController

  get '/farmers' do
    @farmers = Farmer.includes(:vegetables).all
    erb :"farmers/index"
  end

end