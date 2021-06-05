  
import { connect } from 'react-redux';
import { createStore } from '../../actions/store_actions';
import StoreForm from './store_form';
import { withRouter } from 'react-router-dom';


const mstp = state => {
    const ownerId = state.session.id;
    return {
        store: { 
            name: '',
            owner: {id: ownerId},
            description: ''
        },
        errors: state.errors.stores,

        formType: 'Create Store'
    }
    
}

const mdtp = dispatch => ({
    action: store => dispatch(createStore(store)),
})

export default connect(mstp, mdtp)(StoreForm);