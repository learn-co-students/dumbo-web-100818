class Status < ApplicationRecord

  # validates :body, presence: true
  # validates_presence_of :body
  # validates :body, numeric: {}
  validates_length_of :body, minimum: 1, maximum: 160

  # validate :graham_must_be_mentioned

  has_many :status_reactions, dependent: :destroy
  has_many :reactions, through: :status_reactions


  private

  def graham_must_be_mentioned
    unless body.include? "Graham"
      errors.add(:body, "must include Graham's name!!!!!!")
    end
  end


end
