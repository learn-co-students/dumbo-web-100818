class User < ApplicationRecord

  validates :username, presence: true, uniqueness: true

  # def password=(value)
  #   self.password_digest = BCrypt::Password.create(value)
  # end

  # def authenticate(plaintext_password)
  #   BCrypt::Password.new(self.password_digest) == plaintext_password
  # end

  has_secure_password

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
