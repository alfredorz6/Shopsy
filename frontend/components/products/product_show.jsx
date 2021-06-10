import React from 'react';
import Loading from '../loading';
import { withRouter, Link } from 'react-router-dom';
import NumericInput from 'react-numeric-input';


class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.product
        debugger
        this.handleEdit = this.handleEdit.bind(this);
        
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
        // this.props.fetchStore(this.props.match.params.storeId);
    };

    componentDidUpdate(prevProps) {
        if (this.props.match.params.productId !== prevProps.match.params.productId) {
            this.props.fetchProduct(this.props.match.params.productId);
            // this.props.fetchStore(this.props.match.params.storeId);
        }
    }

    handleEdit(event) {
        event.preventDefault();
        this.props.history.push(`/products/${this.props.product.id}/edit`);
    }

   
    render() {
        let { product, currentUserId } = this.props;
        if (!product || !currentUserId) {
            return (<Loading />)
        }
        debugger
        const addToCartButton = currentUserId === product.ownerId
            ? ''
            : <button className="clicky" >Add to cart</button>; //will use a this.addCart
        return (
            <div className="product-show-reviews">
                <div className="product-show">              
                    <div className="carousel">
                        
                    </div>

                    <div className="product-info">
                        <ul>
                            <li>
                                <Link to={`/stores/${product.storeId}`}>{product.storeName}</Link>
                            </li>
                            <li>{product.name}</li>
                            <li className="price">
                                <strong>USD {product.price}</strong>
                            </li>
                            <li>
                                <label className="quantity" htmlFor="quantity"></label>
                                <br />
                                
                                <span> in stock!</span>
                            </li>
                            <li>
                                {addToCartButton}
                            </li>

                        </ul>
                        <div className="product-details">
                            <label htmlFor="details">Item details</label>
                            {product.description}
                        </div>
                        <div className="owner-info">
                            
                            
                            <div className="shop-owner-name">{product.storeName}</div>
                            <div className="shop-owner-email">
                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    };
}

export default withRouter(ProductShow);