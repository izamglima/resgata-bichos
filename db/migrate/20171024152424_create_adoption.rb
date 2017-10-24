class CreateAdoption < ActiveRecord::Migration[5.0]
  def change
    create_table :adoptions do |t|
      t.date :date_adoption
      t.boolean :adopted
      t.string :comment
      t.string :address
      t.boolean :vaccinated
      t.decimal :latitude, precision: 10, scale: 6
      t.decimal :longitude, precision: 10, scale: 6
    end
  end
end
