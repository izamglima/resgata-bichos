class AddSizeToAnimal < ActiveRecord::Migration[5.0]
  def change
    add_reference :animals, :size, foreign_key: true
  end
end
