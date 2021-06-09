import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS, REMOVE_PRODUCT } from '../actions/product_actions';

const ProductsReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PRODUCT:
            debugger
            newState[action.product.id] = action.product
            return newState 
        case RECEIVE_PRODUCTS:
            return Object.assign(newState, action.products);
        case REMOVE_PRODUCT:
            delete newState[action.productId];
            return newState;
            
        default:
            return state;
    }
};

export default ProductsReducer;