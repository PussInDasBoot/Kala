class RenameLongColumnInStudios < ActiveRecord::Migration[5.0]
  def change
      rename_column :studios, :long, :lng
  end
end
