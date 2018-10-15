class Flight

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def tickets
    Ticket.all.select do |ticket|
      ticket.flight == self
    end
  end

  def passengers
    tickets.map do |ticket|
      ticket.passenger
    end
  end

  def passenger_manifest
    # passengers.map do |passenger|
    #   passenger.name
    # end
    self.passengers.map(&:name) #.join("\r\n")
  end


end