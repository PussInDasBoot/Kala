class CreateStudios < ActiveRecord::Migration[5.0]
  def change
    create_table :studios do |t|
        t.string :name
        t.string :location
        t.string :address
        t.float  :rating
        t.float  :drop_in_price
        t.float  :pass_average
        t.float  :membership_average
        t.timestamps null: false
    end
  end
end
