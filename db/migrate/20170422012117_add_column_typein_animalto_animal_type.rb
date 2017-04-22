class AddColumnTypeinAnimaltoAnimalType < ActiveRecord::Migration[5.0]
  def change
  	rename_column :animals, :type, :animal_type
  end
end
