# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_03_15_143849) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bus_transports", force: :cascade do |t|
    t.bigint "order_id", null: false
    t.integer "passenger_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["order_id"], name: "index_bus_transports_on_order_id"
  end

  create_table "cargo_transports", force: :cascade do |t|
    t.bigint "order_id", null: false
    t.string "item_description"
    t.decimal "weight"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["order_id"], name: "index_cargo_transports_on_order_id"
  end

  create_table "cars", force: :cascade do |t|
    t.string "name"
    t.string "model"
    t.date "year"
    t.string "vin"
    t.string "fuel_type"
    t.integer "capacity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "clients", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "city"
    t.string "postal_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "drivers", force: :cascade do |t|
    t.string "name"
    t.string "surname"
    t.string "phone_number"
    t.string "address"
    t.string "city"
    t.string "postal_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orders", force: :cascade do |t|
    t.date "delivery_date"
    t.string "delivery_location"
    t.integer "status"
    t.string "description"
    t.string "order_type"
    t.integer "orderable_id"
    t.bigint "client_id", null: false
    t.bigint "car_id"
    t.bigint "driver_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["car_id"], name: "index_orders_on_car_id"
    t.index ["client_id"], name: "index_orders_on_client_id"
    t.index ["driver_id"], name: "index_orders_on_driver_id"
    t.index ["order_type", "orderable_id"], name: "index_orders_on_order_type_and_orderable_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "jti"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["jti"], name: "index_users_on_jti"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "bus_transports", "orders"
  add_foreign_key "cargo_transports", "orders"
  add_foreign_key "orders", "cars"
  add_foreign_key "orders", "clients"
  add_foreign_key "orders", "drivers"
end
