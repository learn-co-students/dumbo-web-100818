class Cat < Mammal


  # def initialize(name, fluffiness)
  #   @fluffiness = fluffiness
  #   super(name)
  # end


  def give_birth_to_live_young
    # sleep 0.1
    # self.give_birth_to_live_young
    super(5)
    p "Kittens!"
  end
  
end
