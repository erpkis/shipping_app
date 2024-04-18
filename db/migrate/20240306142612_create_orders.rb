class CreateOrders < ActiveRecord::Migration[7.1]
  def change
    create_table :orders do |t|
      t.date :delivery_date
      t.string :delivery_location
      t.integer :status
      t.string :description
      t.string :order_type
      t.integer :orderable_id
      t.references :client, null: false, foreign_key: true
      t.references :car, foreign_key: true
      t.references :driver, foreign_key: true

      t.timestamps
    end
    add_index :orders, [:order_type, :orderable_id]

    create_table :cargo_transports do |t|
      t.references :order, null: false, foreign_key: true
      t.string :item_description
      t.decimal :weight

      t.timestamps
    end

    create_table :bus_transports do |t|
      t.references :order, null: false, foreign_key: true
      t.integer :passenger_count

      t.timestamps
    end
  end
end
