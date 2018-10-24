require "spec_helper"

describe "Escape" do

  before(:each) do
    @ppz = Zoo.new("Prospect Park Zoo")
    @brookfield = Zoo.new("Brookfield Zoo")
    @bronx = Zoo.new("Bronx Zoo")

    @dumbo = Animal.new

    @escape_from_ppz = Escape.new(@dumbo, @ppz)
    @escape_from_brookfield = Escape.new(@dumbo, @brookfield)
  end

  describe "Animal#zoos_escaped_from" do
    it "returns the zoos that the animal has escaped from before" do
      # p "RUNNING FOO"

      expect(@dumbo.zoos_escaped_from).to contain_exactly(@ppz, @brookfield)
    end
  end

  # describe "#bar" do
  #   it "does something" do
  #     p "RUNNING BAR"
  #     expect(true).to be(true)
  #   end
  # end

  after(:all) do
    Zoo.class_variable_set(:@@all, [])
  end

end
