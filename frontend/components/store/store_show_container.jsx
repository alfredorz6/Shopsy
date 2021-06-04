import StoreShow from './store_show'
import {connect} from 'react-redux'
import {fetchStore} from '../../actions/store_actions'

const mstp = (state, ownProps) => ({
    store: state.entities.stores[ownProps.match.params.storeId],
    
    currentUserID: state.session.id
})

const mdtp = dispatch => ({
    fetchStore: storeId => dispatch(fetchStore(storeId))
})






export default connect(mstp, mdtp)(StoreShow);