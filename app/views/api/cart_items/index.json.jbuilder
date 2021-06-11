# @cart_items.each do |item|
#     json.set! item.id do 
#         json.partial! 'cart_item', cart_item: item
#     end
# end

  
@cart_items.each do |cart_item| 
    json.set! cart_item do  
        json.partial! '/api/cart_items/cart_item', cart_item: cart_item
        json.extract! cart_item, :id, :product_id 
        json.extract! cart_item.product, :name, :price, :store_id
        json.photoUrl url_for(cart_item.product.photo)
        
        

        
    end
end