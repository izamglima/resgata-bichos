class RemoveUserFromAdoption < ActiveRecord::Migration[5.0]
  def change
    remove_reference :adoptions, :user, foreign_key: true
  end
end
