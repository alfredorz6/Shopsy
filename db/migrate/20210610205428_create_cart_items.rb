class CreateCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
      t.integer :cart_id, null: false, indexed: true
      t.integer :product_id, null: false, indexed:true

      t.timestamps
    end

    create_table :cart do |t|
      t.integer :user_id, null: false, indexed: true
      
      t.timestamps
    end
  end
end
