@cart_items.each do |cart_item| 
    json.set! cart_item.id do 
        json.extract! cart_item, :id, :user_id
        json.product do 
            json.partial! "api/products/product", product: cart_item.product
            json.photoUrl url_for(cart_item.product.photo)
        end
        json.deleted false
    end
end  

  
# @cart_items.each do |cart_item| 
#     json.set! cart_item do  
#         json.partial! '/api/cart_items/cart_item', cart_item: cart_item
#         json.extract! cart_item, :id, :product_id, : 
#         json.extract! cart_item.product, :name, :price, :store_id
#         json.photoUrl url_for(cart_item.product.photo)
        
        

        
#     end
# end

  
