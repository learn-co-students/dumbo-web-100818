
class User < ApplicationRecord

  has_many :votes

  validates :username, uniqueness: true


  # def potato_salad=(value)
  #   p ""
  #   p ""
  #   p ""
  #   p ""
  #   puts "🥔" * 10
  #   p ""
  #   p ""
  #   p ""
  #   p ""
  # end
  def authenticate(plaintext_password)
    BCrypt::Password.new(self.password_digest) == plaintext_password
  end

  def password=(plaintext_password)
    self.password_digest = BCrypt::Password.create(plaintext_password)
  end

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
