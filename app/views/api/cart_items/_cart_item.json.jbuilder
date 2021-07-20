json.extract! @cart_item, :id, :user_id
json.product do 
    json.partial! "api/products/product", product: @cart_item.product
    json.photoUrl url_for(@cart_item.product.photo)
end
json.deleted false
   