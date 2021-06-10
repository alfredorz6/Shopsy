json.extract! store, :id, :name, :description
json.ownerId store.owner.id
json.ownerName store.owner.name
# json.products store.products, :id
# json.set! products
json.imageUrl url_for(store.photo)
