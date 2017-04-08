class AddAnimalsToImages < ActiveRecord::Migration[5.0]
  def change
    add_reference :images, :animal, foreign_key: true
  end
end
