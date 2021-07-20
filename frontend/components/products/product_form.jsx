import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {listErrors} from '../../selectors/selectors'

class ProductForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.product
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
            <div className='product-forms'>
                <h2 className='product-form-name'>{this.props.newItem ? "Add new item for sale." : "Edit Product"}</h2>
                <form onSubmit={this.handleSubmit} className="product-form">

                    {errorsComp}

                    
                    <div className="listing-details">
                        <br/>
                        <h3>Listing details</h3>
                        <br/>

                        <div className="name">
                            <div className="label-description">
                                <label htmlFor="name">Title *</label>
                            </div>
                            
                            <input required type="text" value={this.state.name || ''} id="name" onChange={this.update('name')} />
                            <p>give a title to your product listing</p>
                        </div>
                        <br/>

                        <div className="description">
                            <div className="label-description">
                                <label htmlFor="description">Description *</label>
                                
                            </div>
                            
                            <textarea required id="description" value={this.state.description || ''} onChange={this.update('description')} cols="30" rows="10"></textarea>
                            <p>
                                    describe your product, add function and characteristics to attract the clients
                            </p>
                        </div>
                                                
                    </div>
                

                    <div className="inventory-pricing">
                        
                        <br/>
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
                            <p>give a value to your product, keep in mind the costs!</p>
                        </div>
                    </div>
                    <br/>
                    <br/>

                    
                    <div className="flex-row">
                        <Link to={`/stores/${this.state.store_id}`}
                            className="clickable-button-cancel">
                            Cancel
                        </Link>
                        <br/>
                        <button className="clickable-button-save">Save and continue</button>
                    </div>
                    
                </form>
            </div>

        );
    }
};

export default ProductForm;