class AddRaceDogToAnimal < ActiveRecord::Migration[5.0]
  def change
    add_reference :animals, :race_dog, foreign_key: true
  end
end
