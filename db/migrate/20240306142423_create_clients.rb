class CreateClients < ActiveRecord::Migration[7.1]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :postal_code

      t.timestamps
    end
  end
end
