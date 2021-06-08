import { connect } from "react-redux";
import ProductForm from "./product_form";
import { createProduct } from '../../actions/product_actions';

const mstp = (state, ownProps) => {    
    const userId = state.session.id;
    const user = state.entities.users[userId];
    const storeId = user.storeId;
    const product = {name: '', description: '', price: '', storeId: storeId};
    const errors = state.errors.product;
    
    return {
        product,
        errors,

        newItem: true
    };
};


const mdtp = dispatch => ({
    action: product => dispatch(createProduct(product))
});

export default connect(mstp, mdtp)(ProductForm);