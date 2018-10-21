class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :poke_type
      t.boolean :fainted
      t.integer :trainer_id
    end
  end
end
