class AddRaceCatToAnimal < ActiveRecord::Migration[5.0]
  def change
    add_reference :animals, :race_cat, foreign_key: true
  end
end
