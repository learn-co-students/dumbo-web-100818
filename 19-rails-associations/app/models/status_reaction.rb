class StatusReaction < ApplicationRecord
  belongs_to :status
  belongs_to :reaction
end
