import { RECEIVE_CART_ITEMS, RECEIVE_ITEM_ERRORS } from "../actions/cart_item_actions";

const cartItemErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return [];

        case RECEIVE_ITEM_ERRORS:
            return action.errors;
    
        default:
            return [];
    }
};

export default cartItemErrorsReducer;
