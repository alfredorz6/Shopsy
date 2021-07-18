import * as ApiUtil  from '../util/product_api_util';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const RECEIVE_PRODUCTS_ERRORS = 'RECEIVE_PRODUCTS_ERRORS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_SEARCH_PRODUCTS = "RECEIVE_SEARCH_PRODUCTS";

const receiveProducts = products => {
    return {
        type: RECEIVE_PRODUCTS,
        products
    }
};

const receiveProduct = (product) => {
    return {
        type: RECEIVE_PRODUCT,
        product
    };
};

const removeProduct = productId => {
    return {
        type: REMOVE_PRODUCT,
        productId
    }
}

const receiveProductsErrors = errors => ({
    type: RECEIVE_PRODUCTS_ERRORS,
    errors
});

export const receiveSearchProducts = products => {
    return {
      type: RECEIVE_SEARCH_PRODUCTS,
      products
    };
  };
  

// export const fetchProducts = () => dispatch => (
//     ApiUtil.fetchAllProducts().then(products => dispatch(receiveProducts(products)))
// )

export const fetchProducts = (storeId) => dispatch => {
    return ApiUtil.fetchAllProducts(storeId).then(products => dispatch(receiveProducts(products)))
}

export const fetchProduct = (productId) => dispatch => (
    ApiUtil.fetchProduct(productId).then(product => dispatch(receiveProduct(product)) )
);

export const createProduct = (product) => dispatch => (
   ApiUtil.createProduct(product).then(product => (
        dispatch(receiveProduct(product))
    ), err => (
        dispatch(receiveProductsErrors(err.responseJSON))
    ))
);

export const updateProduct = (product) => dispatch => (
    ApiUtil.updateProduct(product).then(product => (
        dispatch(receiveProduct(product))
    ), err => (
        dispatch(receiveProductsErrors(err.responseJSON))
    ))
);

export const deleteProduct = productId => dispatch => (
    ApiUtil.deleteProduct(productId).then(() => dispatch(removeProduct(productId)))
    
);

export const fetchSearchProduct = query => {
    return dispatch => {
      return ApiUtil.fetchSearchProduct(query).then(searchProducts => {
        return dispatch(receiveSearchProducts(searchProducts));
      });
    };
};