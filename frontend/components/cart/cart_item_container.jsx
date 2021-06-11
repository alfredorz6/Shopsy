import { connect } from "react-redux";
import { fetchCartItems, updateCartItem, removeCartItem } from "../../actions/cart_item_actions";
import CartItems from "./cart_item";

const mstp = state => {
    let currentUserId= state.session.id
    let allItems = state.entities.cartItems
    return {
    itemsArray: Object.keys(allItems).map(id => allItems[id]),
    currentUserId
}};

const mdtp = dispatch => ({
    fetchCartItems: () => dispatch(fetchCartItems()),
    updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
    removeCartItem: cartItemId => dispatch(removeCartItem(cartItemId))
});

export default connect(mstp, mdtp)(CartItems);
