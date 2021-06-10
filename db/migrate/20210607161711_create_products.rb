class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false, indexed: true
      t.text :description, null: false
      t.integer :price, null: false
      t.integer :store_id, null: false, indexed: true

      t.timestamps
    end
  end
end
