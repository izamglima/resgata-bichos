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

ActiveRecord::Schema.define(version: 20171028232135) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "adoptions", force: :cascade do |t|
    t.date    "date_adoption"
    t.string  "comment"
    t.string  "address"
    t.boolean "vaccinated"
    t.decimal "latitude",      precision: 10, scale: 6
    t.decimal "longitude",     precision: 10, scale: 6
    t.integer "animal_id"
    t.index ["animal_id"], name: "index_adoptions_on_animal_id", using: :btree
  end

  create_table "animals", force: :cascade do |t|
    t.string   "name"
    t.string   "race"
    t.string   "color"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "user_id"
    t.string   "animal_type"
    t.string   "sex"
    t.string   "age"
    t.string   "size"
    t.integer  "size_id"
    t.integer  "race_dog_id"
    t.integer  "race_cat_id"
    t.index ["race_cat_id"], name: "index_animals_on_race_cat_id", using: :btree
    t.index ["race_dog_id"], name: "index_animals_on_race_dog_id", using: :btree
    t.index ["size_id"], name: "index_animals_on_size_id", using: :btree
    t.index ["user_id"], name: "index_animals_on_user_id", using: :btree
  end

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id"
    t.text     "body"
    t.integer  "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_comments_on_event_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "events", force: :cascade do |t|
    t.string   "status"
    t.boolean  "resolved"
    t.string   "comment"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.integer  "animal_id"
    t.date     "data_event"
    t.decimal  "latitude",   precision: 10, scale: 6
    t.decimal  "longitude",  precision: 10, scale: 6
    t.string   "address"
    t.index ["animal_id"], name: "index_events_on_animal_id", using: :btree
  end

  create_table "images", force: :cascade do |t|
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.integer  "animal_id"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["animal_id"], name: "index_images_on_animal_id", using: :btree
  end

  create_table "race_cats", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "race_dogs", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sizes", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "name"
    t.string   "tel"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "adoptions", "animals"
  add_foreign_key "animals", "race_cats"
  add_foreign_key "animals", "race_dogs"
  add_foreign_key "animals", "sizes"
  add_foreign_key "animals", "users"
  add_foreign_key "comments", "events"
  add_foreign_key "comments", "users"
  add_foreign_key "events", "animals"
  add_foreign_key "images", "animals"
end
