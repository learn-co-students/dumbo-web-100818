require 'pry'
require_relative 'flight'
require_relative 'passenger'
require_relative 'ticket'

@jfk_sea = Flight.new("United 222 JFK-SEA")
@lga_ord = Flight.new("Spirit 383 LGA-ORD")
@ord_ewr = Flight.new("JetBlue 111 ORD-EWR")
@bey_ord = Flight.new("Lufthansa 888 BEY-ORD")


@graham = Passenger.new("Graham")
@greg = Passenger.new("Greg")
@ryan = Passenger.new("Ryan")


Ticket.new(@graham, @lga_ord)
Ticket.new(@graham, @ord_ewr)

Ticket.new(@ryan, @ord_ewr)
Ticket.new(@ryan, @bey_ord)

Ticket.new(@greg, @ord_ewr)
Ticket.new(@greg, @bey_ord)


# p @greg.tickets #
# p @greg.flight_names #


p @bey_ord.passenger_manifest




