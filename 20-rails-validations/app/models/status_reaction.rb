class StatusReaction < ApplicationRecord
  belongs_to :status
  belongs_to :reaction


  validates :reaction, uniqueness: { scope: :status
    #message: "should happen once per year" 
  }
end
