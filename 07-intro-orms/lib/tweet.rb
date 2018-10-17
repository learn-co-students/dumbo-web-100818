class Tweet
  attr_accessor :message, :username, :id

  def self.all
    sql = <<-SQL
    SELECT * FROM tweets
    SQL

    db_results = DB[:conn].execute(sql)

    db_results.map do |tweet_hash|
      Tweet.new(tweet_hash["message"], tweet_hash["username"], tweet_hash["id"])
    end
  end

  def destroy
    sql = <<-SQL
    DELETE FROM tweets WHERE id=#{self.id}
    SQL

    DB[:conn].execute(sql)
  end

  def save
    sql = <<-SQL
    INSERT INTO tweets (message, username)
    VALUES ("#{self.message}","#{self.username}")
    SQL

    DB[:conn].execute(sql)

    updated_tweet = Tweet.all.last
    binding.pry
    self.id = updated_tweet.id

  end

  def find_by(message)
    sql = <<-SQL
    SELECT * FROM tweets
    WHERE message LIKE #{message}
    SQL

    db_result = DB[:conn].execute(sql)
    tweet_hash = db_result[0]
    if tweet_hash
      Tweet.new(
        tweet_hash["message"],
        tweet_hash["username"],
        tweet_hash["id"]
      )
    else
      puts "Didn't find anything, sorry!"
    end
  end

  def initialize(message, username, id=nil)
    @message = message
    @username = username
    @id = id
  end
end
