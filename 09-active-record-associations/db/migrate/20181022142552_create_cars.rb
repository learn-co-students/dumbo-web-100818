class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |table|
      table.string :model
      table.integer :year
      table.integer :driver_id
    end
  end
end
