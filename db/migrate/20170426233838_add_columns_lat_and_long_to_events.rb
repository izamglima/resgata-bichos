class AddColumnsLatAndLongToEvents < ActiveRecord::Migration[5.0]
  def change
  	add_column :events, :lat, :decimal, {:precision=>10, :scale=>6}
	add_column :events, :lng, :decimal, {:precision=>10, :scale=>6}
  end
end
