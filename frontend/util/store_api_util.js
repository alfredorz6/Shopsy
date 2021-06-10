export const fetchStore = storeId => (
    $.ajax({
        url: `api/stores/${storeId}`,
        method: "GET"
    })
)

export const fetchStores = () => (
    $.ajax({
        url: `api/stores`,
        method: "GET"
    })
)

export const createStore = store => (
    $.ajax({
        url: `api/stores`,
        method: "POST",
        data: {store: store}
    })
)

export const updateStore = store => (
    $.ajax({
        url: `api/stores/${store.id}`,
        method: "PATCH",
        data: {store: store}
    })
)