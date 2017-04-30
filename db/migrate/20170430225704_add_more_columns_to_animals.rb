class AddMoreColumnsToAnimals < ActiveRecord::Migration[5.0]
  def change
  	add_column :animals, :sex, :string
  	add_column :animals, :age, :string
  	add_column :animals, :size, :string
  end
end
