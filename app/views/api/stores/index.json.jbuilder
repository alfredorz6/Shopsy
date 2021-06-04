@stores.each do |store|
    json.set! store.id do
      json.extract! store, :id, :name, :owner, :description
    end
end