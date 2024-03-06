class CreateOrders < ActiveRecord::Migration[7.1]
  def change
    create_table :orders do |t|
      t.date :delivery_date
      t.date :delivery_location
      t.integer :status
      t.string :description
      t.string :weight
      t.references :client, null: false, foreign_key: true
      t.references :car, null: false, foreign_key: true
      t.references :driver, null: false, foreign_key: true

      t.timestamps
    end
  end
end
