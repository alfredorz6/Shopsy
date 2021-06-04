import React from 'react';
import { connect } from 'react-redux';
import StoreForm from './store_form';
import { fetchStore, updateStore } from '../../actions/store_actions';


class EditStoreForm extends React.Component {
    componentDidMount() {
        this.props.fetchStore(this.props.match.params.storeId);
    }

    render() {
        
        const { action, formType, store } = this.props;

        if (!store) return null;
        return (
        <StoreForm
            action={action}
            formType={formType}
            store={store} />
        );
    }
}

const mstp = (state, ownProps) => ({
  store: state.entities.stores[ownProps.match.params.storeId],
  formType: 'Update Store',
  errors: state.errors.stores
});

const mdtp = dispatch => ({
  fetchStore: storeId => dispatch(fetchStore(storeId)),
  action: store => dispatch(updateStore(store))
});

export default connect(mstp, mdtp)(EditStoreForm);