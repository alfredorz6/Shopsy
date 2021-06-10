  
import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './product_form';
import { updateProduct, fetchProduct } from '../../actions/product_actions';
import { loading } from "../loading";


const mstp = (state, ownProps) => {
    const productId = ownProps.match.params.productId;
    const product = state.entities.products[productId];
    const errors = state.errors.product;
    
    return {
        newItem: false,
        product,
        errors,
    };
};
const mdtp = (dispatch) => {
    return {
        action: (product) => dispatch(updateProduct(product)),
        fetchProduct: (productId) => dispatch(fetchProduct(productId)),
        
    };
};


class EditProductForm extends React.Component {
    constructor(){
        super();
        this.state = {};
    }
    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId);
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.productId !== prevProps.match.params.productId){
            this.props.fetchProduct(this.props.match.params.productId);
        }
    }
    
    render(){
        const { product, action, errors  } = this.props;
        
        if (!product){
            return <div>{loading()}</div>
        };

        return (
            <ProductForm 
                action={action} 
                product={product} 
                errors={errors}/>
        )
    }
}

export default connect(mstp, mdtp)(EditProductForm);