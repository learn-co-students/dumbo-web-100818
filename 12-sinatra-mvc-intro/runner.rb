require 'sinatra'


get("/potato") do
  return ("fries 🍟" * 10)
end
