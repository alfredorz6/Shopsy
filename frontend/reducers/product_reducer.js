import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS, REMOVE_PRODUCT, RECEIVE_SEARCH_PRODUCTS } from '../actions/product_actions';

const ProductsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PRODUCT:
            newState[action.product.id] = action.product
            return newState 
        case RECEIVE_PRODUCTS:
            return Object.assign(newState, action.products);
        case REMOVE_PRODUCT:
            delete newState[action.productId];
            return newState;
        case RECEIVE_SEARCH_PRODUCTS:
            return action.products;
            
        default:
            return state;
    }
};

export default ProductsReducer;