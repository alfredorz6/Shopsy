json.extract! product, :id, :name, :description, :price
json.storeId product.store_id
json.storeName product.store.name
json.ownerId product.store.owner.id