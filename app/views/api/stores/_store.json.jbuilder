json.extract! store, :id, :name, :description, :num_sales
json.ownerId store.owner.id
json.ownerName store.owner.name
# json.products store.products, :id
# json.set! products
json.imageUrl url_for(store.photo)
