class CreatePasses < ActiveRecord::Migration[5.0]
  def change
    create_table :passes do |t|
      t.references :studio, foreign_key: true
      t.integer :num_classes
      t.float :price
      t.timestamps null: false
    end
  end
end
