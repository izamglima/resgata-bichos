class ChangeDataTypeForDataEvent < ActiveRecord::Migration[5.0]
  def change
  	remove_column :events, :data_event
  end
end
