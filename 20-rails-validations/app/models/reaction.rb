class Reaction < ApplicationRecord
  # has_many :status_reactions, dependent: :destroy
  # has_many :statuses, through: :status_reactions


  validates :emoji, uniqueness: true, presence: true
  # validates_uniqueness_of :emoji

  def emoji_a_lot
    self.emoji * 10
  end
end
