class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string :power
      t.string :name
      t.string :weakness
      t.string :alias

      t.timestamps
    end
  end
end
