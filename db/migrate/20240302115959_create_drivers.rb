class CreateDrivers < ActiveRecord::Migration[7.1]
  def change
    create_table :drivers do |t|
      t.string :name
      t.string :surname
      t.string :phone_number
      t.string :address
      t.string :city
      t.string :postal_code

      t.timestamps
    end
  end
end
