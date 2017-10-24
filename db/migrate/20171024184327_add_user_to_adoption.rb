class AddUserToAdoption < ActiveRecord::Migration[5.0]
  def change
    add_reference :adoptions, :user, foreign_key: true
  end
end
