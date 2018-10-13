class Animal

  attr_reader :name
  attr_accessor :mood

  def nurse

  end

  def initialize(name)

    @name = name
    @mood = 'nervous'
  end

end