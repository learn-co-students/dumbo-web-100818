require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    # @time = Time.now
    erb :welcome
  end


  get "/potato" do
    "🥔"
  end

end
