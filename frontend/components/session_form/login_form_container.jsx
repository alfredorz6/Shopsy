import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import {openModal, closeModal} from '../../actions/modal_actions'

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'login',
    modal: state.ui.modal
    // navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
