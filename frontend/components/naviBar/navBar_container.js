import { connect } from 'react-redux'
import NaviBar from '../naviBar/navBar'
import { logout } from "../../actions/session_actions";
import { openModal } from '../../actions/modal_actions';
import {currentUserHasStore} from '../../selectors/selectors'


const mstp = state => {
    
    return {

        currentUser: state.entities.users[state.session.id],

        // storeId: state.entities.stores[state.currentUser.store.id],

        users: state.entities.users

    }
}

const mdtp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(mstp, mdtp)(NaviBar);