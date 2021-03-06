class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :body, null: false
      t.integer :rating, null: false
      t.integer :user_id, null: false, indexed: true
      t.integer :product_id, null: false, indexed: true

      t.timestamps
    end
  end
end
