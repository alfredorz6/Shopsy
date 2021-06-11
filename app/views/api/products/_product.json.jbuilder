json.extract! product, :id, :name, :description, :price
json.storeId product.store.id
json.storeName product.store.name
json.ownerId product.store.owner.id
json.imageUrl url_for(product.photo)
json.numSales product.store.num_sales
json.owner product.store.owner.name
