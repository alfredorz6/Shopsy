json.extract! store, :id, :name, :owner, :description, :products
json.ownerId store.owner_id
json.productId store.product.id
