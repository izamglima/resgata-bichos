class RemovePlaceInEvents < ActiveRecord::Migration[5.0]
  def change
  	remove_column :events, :place, :string
  end
end
