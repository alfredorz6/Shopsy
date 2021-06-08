import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { fetchStore } from '../../actions/store_actions';

const mapStateToProps = (state, ownProps) => {
    const product = state.entities.products[ownProps.match.params.productId];
    const shop = state.entities.stores[ownProps.match.params.storeId];
    const currentUserId = state.session.id;
    return {
        product,
        shop,
        currentUserId
    }
}


const mapDispatchToProps = dispatch => ({
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    fetchStore: storeId => dispatch(fetchStore(storeId)),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);