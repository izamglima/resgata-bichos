class AddAnimalToRaces < ActiveRecord::Migration[5.0]
  def change
    add_reference :races, :animal, foreign_key: true
  end
end
