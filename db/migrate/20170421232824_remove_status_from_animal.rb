class RemoveStatusFromAnimal < ActiveRecord::Migration[5.0]
  def change
    remove_column :animals, :status, :string
  end
end
