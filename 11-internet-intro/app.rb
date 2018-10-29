require 'pry'

class App

  def call(environment_hash)
    status_code = 200
    header = {}
    body = ['goodbye'] # or {}

    if environment_hash["REQUEST_PATH"] == "/potato"
      @potato = Potato.first
      body = ["<html><head></head><body>#{ @potato.full_name }</body></html>"]
    elsif environment_hash["REQUEST_PATH"] == "/banana"
      body = ["sandwich?"]
    else
      body = ["not found"]
      status_code = 404
    end


    return [status_code, header, body]
  end


end
