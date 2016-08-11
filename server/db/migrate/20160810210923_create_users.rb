class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :uid
      t.string :provider
      t.string :name
      t.string :profile_picture
      t.string :access_token
      t.string :refresh_token
      t.datetime :access_token_expiry
      t.timestamps null: false
    end
  end
end
