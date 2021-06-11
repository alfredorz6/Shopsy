class ChangeCartToCarts < ActiveRecord::Migration[5.2]
  def change
    
    rename_table :cart, :carts
    
  end
end
