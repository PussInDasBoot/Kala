class CreateMemberships < ActiveRecord::Migration[5.0]
  def change
    create_table :memberships do |t|
      t.references :studio, foreign_key: true
      t.integer    :duration
      t.integer    :num_classes
      t.float      :price
    end
  end
end
