json.extract! store, :id, :name, :description, :products
json.storeId product.store_id
json.storeName product.store.name
json.ownerId product.store.owner.id