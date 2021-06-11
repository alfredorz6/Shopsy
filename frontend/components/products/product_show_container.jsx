import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { fetchStore } from '../../actions/store_actions';
import {addToCart, fetchCartItems} from '../../actions/cart_item_actions'

const mstp = (state, ownProps) => {
    
    const productId = ownProps.match.params.productId;
    const product = state.entities.products[productId];
    const currentUserId = state.session.id;
    return {
        productId,
        product: product,
        currentUserId: currentUserId
    }
}


const mdtp = dispatch => ({
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    fetchStore: storeId => dispatch(fetchStore(storeId)),
    addToCart: cartItem => dispatch(addToCart(cartItem)),
    fetchCartItems: () => dispatch(fetchCartItems())
    
});

export default connect(mstp, mdtp)(ProductShow);