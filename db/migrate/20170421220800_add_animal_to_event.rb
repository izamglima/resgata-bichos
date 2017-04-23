class AddAnimalToEvent < ActiveRecord::Migration[5.0]
  def change
    add_reference :events, :animal, foreign_key: true
  end
end
