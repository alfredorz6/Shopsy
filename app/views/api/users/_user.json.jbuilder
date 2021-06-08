json.extract! user, :id, :email, :name

if user.store
    json.storeId user.store.id
else
    json.storeId nil
end