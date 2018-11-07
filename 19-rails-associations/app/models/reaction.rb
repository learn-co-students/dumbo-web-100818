class Reaction < ApplicationRecord
  # has_many :status_reactions
  # has_many :statuses, through: :status_reactions

  def emoji_a_lot
    self.emoji * 10
  end
end
