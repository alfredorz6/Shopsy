export const fetchAllProducts = (storeId) => {
    
    if (storeId === undefined) {
        return $.ajax({
            url: 'api/products',
            method: "GET"
        })
    } else {
        return $.ajax({
            url: 'api/products',
            method: "GET",
            data: {storeId: storeId}
        })
    }
    
    
}

export const fetchProduct = (productId) => (
    $.ajax({
        url: `api/products/${productId}`,
        method: 'GET'
    })
)

export const createProduct = product => (
    $.ajax({
        url: `api/stores/${product.storeId}/products`,
        method: 'POST',
        data: {product: product}
    })
)

export const updateProduct = product => (
    $.ajax({
        url: `api/products/${product.id}`,
        method: 'PATCH',
        data: {product: product}
    })
)

export const deleteProduct = (productId) => (
    $.ajax({
        url: `api/products/${productId}`,
        mehtod: 'DELETE'
    })
)

export const fetchSearchProduct = query => (
    $.ajax({
      method: "GET",
      url: '/api/search_items',
      data: {query}
    })
)