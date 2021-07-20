import React from 'react';
import Loading from '../loading';
import { withRouter, Link } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import ReviewForm from '../reviews/review_form';
import ReviewsIndex from '../reviews/review_index';


class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        product_id: this.props.productId,
        user_id: this.props.currentUserId}
        this.addCart = this.addCart.bind(this)
        this.handleEdit = this.handleEdit.bind(this);
        this.showReviewForm = this.showReviewForm.bind(this)
        
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
        
    };

    componentDidUpdate(prevProps) {
        if (this.props.match.params.productId !== prevProps.match.params.productId) {
            this.props.fetchProduct(this.props.match.params.productId);
            
        }
    }

    handleEdit(event) {
        event.preventDefault();
        this.props.history.push(`/products/${this.props.product.id}/edit`);
    }

    showReviewForm(event){
        let { currentUserId } = this.props;
        if (!currentUserId){
            alert("Please login or sign up first!");
            return;
        };

        const reviewForm = document.getElementById("review-form");
        if (event.target.innerHTML === "Add review") {
            event.target.innerHTML = "Cancel review";
        } else {
            event.target.innerHTML = "Add review";
        }

        reviewForm.classList.toggle("hidden");
    }

    addCart(e) {
        

        e.preventDefault();
        this.props.addToCart(this.state)
        // .then(() => this.props.history.push('/cart_items'));
        return alert("item added to cart")
    ;
    }
    

   
    render() {
        let { product, currentUserId } = this.props;
        if (!product ) {
            return (<Loading />)
        }
        
        const addToCartButton = currentUserId === product.ownerId || !currentUserId? 'Log In to add to cart' : <button onClick={this.addCart} className="clicky" >Add to cart</button>; //will use a this.addCart
        return (
            <div className="product-show-page">
                <div className="product-show">              
                    <div className="carousel">
                        <img className='sidebar'src={product.imageUrl} />
                        <img className='show-image'src={product.imageUrl} />
                    </div>


                    <div className="product-info">
                        <ul>
                            <li className='product-store-name'>
                                <Link to={`/stores/${product.storeId}`}>{product.storeName}</Link>
                            </li>
                            <li className='sales'>Number of completed sales: {product.numSales}</li>
                            <br/>
                            <li className='show-product-name'>{product.name}</li>
                            <li className='show-p-details' >{product.description}</li>
                            <br/>
                            <div className='price-quantity'>
                                <li>
                                    <p>US$ {product.price}</p>
                                </li>
                                <li>
                                    <p> in stock!</p>
                                </li>
                            </div>
                            <li>
                                {addToCartButton}
                            </li>

                        </ul>
                        
                        <div className="owner-info">
                            
                            
                            <div className="shop-owner-name">{product.owner} is the Store owner</div>
                            <div className="shop-owner-email"><FaEnvelope/></div>
                        </div>

                        <div className="review-section">
                            <ReviewsIndex productId={this.props.match.params.productId} />

                            <button className="show-review-form-button clicky" onClick={this.showReviewForm}>Add review</button>

                            <div id="review-form" className="hidden">
                                <ReviewForm productId={this.props.match.params.productId} />
                        </div>

                    </div>

                    </div>

                </div>
            </div>
        )
    };
}

export default withRouter(ProductShow);