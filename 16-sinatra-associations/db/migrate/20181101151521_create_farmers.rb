class CreateFarmers < ActiveRecord::Migration
  def change
    create_table :farmers do |t|
      t.string :name
      t.string :overalls_color
      t.integer :birth_year
      t.integer :number_of_crop_circles, default: 0
    end
  end
end
