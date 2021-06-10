@stores.each do |store|
    json.set! store.id do
      json.extract! store, :id, :name, :owner, :description
      json.imageUrl url_for(store.photo)
    end
end