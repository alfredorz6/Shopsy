import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import {openModal, closeModal} from '../../actions/modal_actions'


const mapStateToProps = (state) => {
  return {
    errors: errors.session,
    formType: 'signup',
    modal: state.ui.modal
    // navLink: <Link to="/login">log in instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
