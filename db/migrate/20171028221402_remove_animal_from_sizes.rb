class RemoveAnimalFromSizes < ActiveRecord::Migration[5.0]
  def change
    remove_reference :sizes, :animal, foreign_key: true
  end
end
