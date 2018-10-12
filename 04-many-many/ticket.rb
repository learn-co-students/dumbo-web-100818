class Ticket

  attr_reader :passenger, :flight

  @@tickets = []

  def initialize(passenger, flight)
    @passenger = passenger
    @flight = flight

    # binding.pry
    @@tickets << self
  end

  def self.all
    @@tickets
  end

  # def to_s
  #   "passenger: #{ passenger.name }, flight: #{ flight.name }"
  # end

end