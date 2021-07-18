# @products.each do |product|
#     json.set! product.id do
#       json.partial! 'product', product: product  
      
#     end
#   end

@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :price, :description
    json.storeId product.store.id
    json.storeName product.store.name
    json.ownerId product.store.owner.id
    json.imageUrl url_for(product.photo)
    json.numSales product.store.num_sales
    json.owner product.store.owner.name
    # json.reviews product.reviews
    
  end
end