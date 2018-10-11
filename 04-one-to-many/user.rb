class User
  attr_reader :username

  def initialize(username)
    @username = username
  end

  def post_tweet(message)
    Tweet.new(message, self)
    puts "posted_tweet!"
  end

  def tweets
    Tweet.all.select do |tweet|
      binding.pry
      tweet.user == self
    end
  end
end
