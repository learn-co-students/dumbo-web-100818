class Escape

  attr_reader :animal, :zoo

  @@all = []

  def initialize(animal, zoo)
    @animal = animal
    @zoo = zoo
    @@all << self
  end 


  def self.all
    @@all
  end

end