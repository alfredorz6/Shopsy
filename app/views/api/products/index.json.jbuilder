@products.each do |product|
    json.set! product.id do
      json.partial! 'product', product: product  
      json.imageUrl url_for(product.photo)
    end
  end