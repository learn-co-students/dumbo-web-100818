class RemoveTrainers < ActiveRecord::Migration[5.2]
  def change
    drop_table :trainers
  end
end
