class RenameColumndataEventinEventstoDataEvent < ActiveRecord::Migration[5.0]
  def change
  	rename_column :events, :dataEvent, :data_event
  end
end
