export const fetchAllProducts = () => (
    $.ajax({
        url: 'api/products',
        method: "GET"
    })
)

export const fetchProduct = (productId) => (
    $.ajax({
        url: `api/products/${productId}`,
        mehtod: 'GET'
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
