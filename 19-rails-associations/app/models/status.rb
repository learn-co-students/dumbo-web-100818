class Status < ApplicationRecord
  has_many :status_reactions
  has_many :reactions, through: :status_reactions
end
