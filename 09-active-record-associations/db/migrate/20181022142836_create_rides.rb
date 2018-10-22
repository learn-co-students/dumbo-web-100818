class CreateRides < ActiveRecord::Migration[5.2]
  def change
    create_table :rides do |t|
      t.integer :passenger_id
      t.integer :driver_id
      t.float :distance
    end
  end
end
