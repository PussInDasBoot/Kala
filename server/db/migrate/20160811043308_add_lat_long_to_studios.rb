class AddLatLongToStudios < ActiveRecord::Migration[5.0]
  def change
    add_column :studios, :lat, :float
    add_column :studios, :long, :float
  end
end
