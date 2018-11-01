class AddFarmerIdToVegetable < ActiveRecord::Migration
  def change
    add_column :vegetables, :farmer_id, :integer
  end
end
