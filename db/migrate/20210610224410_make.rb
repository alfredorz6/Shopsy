class Make < ActiveRecord::Migration[5.2]
  def change
    drop_table :carts
    rename_column :cart_items, :cart_id, :user_id
  end
end
