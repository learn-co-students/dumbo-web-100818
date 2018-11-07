class CreateStatusReactions < ActiveRecord::Migration[5.2]
  def change
    create_table :status_reactions do |t|
      t.belongs_to :status, foreign_key: true
      t.belongs_to :reaction, foreign_key: true

      t.timestamps
    end
  end
end
