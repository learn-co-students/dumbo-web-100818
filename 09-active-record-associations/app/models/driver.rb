class Driver < ActiveRecord::Base
  has_many :cars
  has_many :rides
  has_many :passengers, through: :rides
  # def cars
  #   Car.all.select do |car|
  #     car.driver_id == self.id
  #   end
  # end
end
