import StoreShow from './store_show'
import {connect} from 'react-redux'
import {fetchStore} from '../../actions/store_actions'
import {fetchAllUsers} from '../../actions/user_actions'

const mstp = (state, ownProps) => {
    
    const currentUser = state.session.currentUser;
    const storeId = ownProps.match.params.storeId;
    const store = state.entities.stores[storeId];
    const currentUserId = state.session.id
    const users = state.entities.users;
    
    return {
        store,
        storeId,
        currentUserId,
        currentUser,
        users
    }
}

const mdtp = dispatch => ({
    fetchStore: storeId => dispatch(fetchStore(storeId)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
})


export default connect(mstp, mdtp)(StoreShow);