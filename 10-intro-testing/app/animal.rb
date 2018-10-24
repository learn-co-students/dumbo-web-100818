class Animal

  def zoos_escaped_from
    escapes = Escape.all.select do |escape|
      escape.animal == self
    end

    escapes.map do |escape|
      escape.zoo
    end
  end

end