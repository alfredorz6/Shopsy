import { connect } from 'react-redux';
import Products from './product_index.jsx';
import { fetchProducts, updateProduct } from '../../actions/product_actions';

const mstp = (state) => {
    return {
        products: Object.values(state.entities.products)
    }
}

const mdtp = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts()),
    updateProduct: (product) => dispatch(updateProduct(product))
})

export default connect(mstp, mdtp)(Products);