class AddDataToEvents < ActiveRecord::Migration[5.0]
  def change
  	add_column :events, :data_event, :date
  end
end
