class CreateAnimals < ActiveRecord::Migration[5.0]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :race
      t.string :color
      t.string :status

      t.timestamps
    end
  end
end
