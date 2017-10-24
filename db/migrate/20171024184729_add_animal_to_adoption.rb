class AddAnimalToAdoption < ActiveRecord::Migration[5.0]
  def change
    add_reference :adoptions, :animal, foreign_key: true
  end
end
