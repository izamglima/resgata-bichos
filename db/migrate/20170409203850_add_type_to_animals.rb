class AddTypeToAnimals < ActiveRecord::Migration[5.0]
  def change
    add_column :animals, :type, :string
  end
end
