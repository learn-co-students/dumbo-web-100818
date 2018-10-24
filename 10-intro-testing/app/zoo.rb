class Zoo

  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    self.class.all << self
    # self.class.all << self
  end

  def self.all
    @@all
  end

  # def name
  #   @name
  # end

end