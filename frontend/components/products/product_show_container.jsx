import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { fetchStore } from '../../actions/store_actions';

const mstp = (state, ownProps) => {
    
    const productId = ownProps.match.params.productId;
    const product = state.entities.products[productId];
    // const store = state.entities.stores[product.storeId];
    debugger
    const currentUserId = state.session.id;
    return {
        product: product,
        // store: store,
        currentUserId: currentUserId
    }
}


const mdtp = dispatch => ({
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    fetchStore: storeId => dispatch(fetchStore(storeId)),
    
});

export default connect(mstp, mdtp)(ProductShow);