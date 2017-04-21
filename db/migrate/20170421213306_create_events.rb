class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :dataEvent
      t.string :status
      t.boolean :resolved
      t.string :comment
      t.string :place

      t.timestamps
    end
  end
end
