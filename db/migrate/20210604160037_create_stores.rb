class CreateStores < ActiveRecord::Migration[5.2]
  def change
    create_table :stores do |t|
      t.string :name, null: false, index: true
      t.text :description, null: false
      t.integer :num_sales
      t.integer :owner_id, null: false, index:true  
      t.timestamps
    end
  end
end
