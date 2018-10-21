class Pokemon < ActiveRecord::Base
  def say_hello
    "HI! I'm a #{self.poke_type}, and my name is #{self.name}"
  end
end
