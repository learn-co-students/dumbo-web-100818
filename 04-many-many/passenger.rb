class Passenger

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def tickets
    Ticket.all.select do |ticket|
      ticket.passenger == self
    end
  end

  def flights
    tickets.map do |ticket|
      ticket.flight
    end
  end

  def flight_names
    flights.map do |flight|
      flight.name
    end
  end

end