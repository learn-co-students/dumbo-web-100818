class User < ApplicationRecord

  has_many :votes

  def remaining_votes
    remaining_votes_float.floor
  end

  def seconds_until_next_vote
    (60 - remaining_votes_float * 60).floor
  end

  private

  def remaining_votes_float
    5 + minutes_since_creation - votes.count
  end

  def seconds_since_creation
    Time.now.utc - created_at
  end

  def minutes_since_creation
    seconds_since_creation / 60
  end
end
