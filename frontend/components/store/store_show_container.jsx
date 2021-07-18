import StoreShow from './store_show'
import {connect} from 'react-redux'
import {fetchStore} from '../../actions/store_actions'
import {fetchAllUsers} from '../../actions/user_actions'
import { fetchProducts } from '../../actions/product_actions'


const mstp = (state, ownProps) => {
    
    const currentUser = state.session.currentUser;
    const storeId = ownProps.match.params.storeId;
    const store = state.entities.stores[storeId];
    const currentUserId = state.session.id
    const users = state.entities.users;
    const products = Object.values(state.entities.products)
    
    return {
        store,
        storeId,
        currentUserId,
        currentUser,
        users,
        products
    }
}

const mdtp = dispatch => ({
    fetchStore: storeId => dispatch(fetchStore(storeId)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchProducts: storeId => dispatch(fetchProducts(storeId))
})


export default connect(mstp, mdtp)(StoreShow);