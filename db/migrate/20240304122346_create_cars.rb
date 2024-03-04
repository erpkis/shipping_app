class CreateCars < ActiveRecord::Migration[7.1]
  def change
    create_table :cars do |t|
      t.string :name
      t.string :model
      t.date :year
      t.string :vin
      t.string :fuel_type
      t.integer :capacity

      t.timestamps
    end
  end
end
