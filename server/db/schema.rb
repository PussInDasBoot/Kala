# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160810221614) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "memberships", force: :cascade do |t|
    t.integer "studio_id"
    t.integer "duration"
    t.integer "num_classes"
    t.float   "price"
    t.index ["studio_id"], name: "index_memberships_on_studio_id", using: :btree
  end

  create_table "passes", force: :cascade do |t|
    t.integer  "studio_id"
    t.integer  "num_classes"
    t.float    "price"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["studio_id"], name: "index_passes_on_studio_id", using: :btree
  end

  create_table "studios", force: :cascade do |t|
    t.string   "name"
    t.string   "location"
    t.string   "address"
    t.float    "rating"
    t.float    "drop_in_price"
    t.float    "pass_average"
    t.float    "membership_average"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "uid"
    t.string   "provider"
    t.string   "name"
    t.string   "profile_picture"
    t.string   "access_token"
    t.string   "refresh_token"
    t.datetime "access_token_expiry"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "yoga_classes", force: :cascade do |t|
    t.integer  "studio_id"
    t.string   "name"
    t.string   "instructor_name"
    t.datetime "start_time"
    t.datetime "end_time"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["studio_id"], name: "index_yoga_classes_on_studio_id", using: :btree
  end

  add_foreign_key "memberships", "studios"
  add_foreign_key "passes", "studios"
  add_foreign_key "yoga_classes", "studios"
end
