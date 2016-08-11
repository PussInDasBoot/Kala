class CreateYogaClasses < ActiveRecord::Migration[5.0]
  def change
    create_table :yoga_classes do |t|
      t.references :studio, foreign_key: true
      t.string     :name
      t.string     :instructor_name
      t.datetime   :start_time
      t.datetime   :end_time
      t.timestamps null: false
    end
  end
end
