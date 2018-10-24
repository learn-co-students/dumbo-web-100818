require "spec_helper"

describe "Zoo" do

  describe ".all" do
    it "has a single source of truth (an array with all the instances in it)" do
      expect(Zoo.all).to eq([])

      @san_diego = Zoo.new("San Diego")
      @bronx_zoo = Zoo.new("Bronx Zoo")
      # @other_zoo = Zoo.new

      # expect(Zoo.all.length).to be > 0
      # expect(Zoo.all.length).to eq(2)

      # expect(Zoo.all).to include(@san_diego)
      # expect(Zoo.all).to include(@bronx_zoo)

      expect(Zoo.all).to contain_exactly(@san_diego, @bronx_zoo)
    end
  end

  describe "#name" do
    it "initializes with a name, and will return the name if we want it back" do

      @ppz = Zoo.new("Prospect Park Zoo")
      @brookfield = Zoo.new("Brookfield Zoo")

      expect(@ppz.name).to eq("Prospect Park Zoo")
      expect(@brookfield.name).to eq("Brookfield Zoo")

    end
  end

end
