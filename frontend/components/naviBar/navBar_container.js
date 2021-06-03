import { connect } from 'react-redux'
import NaviBar from './navBar'
import { logout } from "../../actions/session_actions";
import { openModal } from '../../actions/modal_actions';


const mstp = state => {
    return {
        currentUser: state.entities.users[state.session.id]

    }
}

const mdtp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(mstp, mdtp)(NaviBar);