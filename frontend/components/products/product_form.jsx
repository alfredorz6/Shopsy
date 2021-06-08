import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {listErrors} from '../../selectors/selectors'

class ProductForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.product
        // debugger

        
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        let { errors } = this.props;
        let errorsComp;              
        if (!errors){
            errorsComp = <div></div>
        } else {
            errorsComp = listErrors(errors)
        }

       
        return (
            <div>
                <h2>{this.props.newItem ? "Create New Product" : "Edit Product"}</h2>
                <form onSubmit={this.handleSubmit} className="product-form">

                    {errorsComp}

                    
                    <div className="listing-details">
                        <h3>Listing details</h3>
                        <br/>

                        <div className="name">
                            <div className="label-description">
                                <label htmlFor="name">name *</label>
                            </div>
                            
                            <input required type="text" value={this.state.name || ''} id="name" onChange={this.update('name')} />
                        </div>

                        <div className="description">
                            <div className="label-description">
                                <label htmlFor="description">Description *</label>
                                <p>
                                    product description...
                                </p>
                            </div>
                            
                            <textarea required id="description" value={this.state.description || ''} onChange={this.update('description')} cols="30" rows="10"></textarea>
                        </div>
                                                
                    </div>
                

                    <div className="inventory-pricing">
                        

                        <div className="price">

                            <div className="label-description">
                                <label htmlFor="price">Price *</label>
                            </div>

                            <input required type="number" 
                                id="price" 
                                value={this.state.price || ''} 
                                onChange={this.update('price')} 
                                min="0.00" 
                                step="0.01"/>
                        </div>
                    </div>

                    
                    <div className="flex-row">
                        <Link to={`/stores/${this.state.store_id}`}
                            className="clickable button-save-cancel">
                            Cancel
                        </Link>
                        <button className="clickable button-save-cancel">Save and continue</button>
                    </div>
                    
                </form>
            </div>

        );
    }
};

export default ProductForm;