require 'rest-client'
require 'json'
require 'pry'
# "https://www.googleapis.com/books/v1/volumes?q=vegan+life"

# response = RestClient.get 'https://www.reddit.com/r/awww/.json'

# response_hash = JSON.parse(response.body)


# Ask a user for a word(s) to search for from our API (Google books)
# - puts a question to ask them what they want
puts "Hello. What do you want with me? Oh books? Cool. Tell me what type!"
# - get user input and save it to use later
user_input = gets.chomp
# bonus:
# - give user feedback "One moment please! Looking up some books... gettin you the good stuff."

# Get info from API (Google books API) and save response
# - put user input in our api's url
url = "https://www.googleapis.com/books/v1/volumes?q=#{user_input}"
# - get json by using rest-client save this to use for later
response = RestClient.get(url)
# - parse json into ruby
response_hash = JSON.parse(response.body)
# - save response to a variable


# Show the user their books
# - getting books array
books = response_hash["items"]
# - looping the books array
if !books
  puts "we don't got no books!"
else
  puts "We found #{books.count} books for ya!"
  puts "Here they are!"

  books.each do |book|
    puts ""
    puts book["volumeInfo"]["title"]
    puts book["volumeInfo"]["authors"]
    puts book["volumeInfo"]["description"]
    puts "*" * 25
  end
end
# - puts books to screen
 # - show titles
 # puts response_hash["items"][0]["volumeInfo"]["title"]
 # # - show author
 # puts response_hash["items"][0]["volumeInfo"]["authors"]
 # # - show description
 # puts response_hash["items"][0]["volumeInfo"]["description"]






# binding.pry
