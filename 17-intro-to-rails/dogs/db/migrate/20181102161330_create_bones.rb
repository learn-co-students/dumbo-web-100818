class CreateBones < ActiveRecord::Migration[5.2]
  def change
    create_table :bones do |t|
      t.integer :tastiness

      t.timestamps
    end
  end
end
