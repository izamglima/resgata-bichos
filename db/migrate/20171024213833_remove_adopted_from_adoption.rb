class RemoveAdoptedFromAdoption < ActiveRecord::Migration[5.0]
  def change
    remove_column :adoptions, :adopted, :boolean
  end
end
