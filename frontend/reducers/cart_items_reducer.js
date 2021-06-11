import { RECEIVE_CART_ITEMS, REMOVE_CART_ITEM, RECEIVE_CART_ITEM } from "../actions/cart_item_actions";



const CartItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextstate = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return Object.assign(nextstate, action.cartItems);
        case REMOVE_CART_ITEM:
            delete nextstate[action.cartItemId];
            return newObject;
        case RECEIVE_CART_ITEM:
            nextstate[action.cartItem.id]= action.cartItem;
            return nextstate
        default:
            return state;
    }
};

export default CartItemsReducer;