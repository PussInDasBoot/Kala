class CreateClassPackages < ActiveRecord::Migration[5.0]
  def change
    create_table :class_packages do |t|
      t.references :studio, foreign_key: true
      t.string :category
      t.integer :num_classes
      t.integer :duration
      t.float :price

      t.timestamps
    end
  end
end
