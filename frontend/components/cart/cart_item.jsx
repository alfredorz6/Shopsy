import React from 'react';
import {Link} from 'react-router-dom';
import shortid from 'shortid';
import { FaTrashAlt } from 'react-icons/fa'

class CartItems extends React.Component {
    constructor(){
        super();
        this.state = {
            total: 0
        }
        this.handleRemoveCartItem = this.handleRemoveCartItem.bind(this);
        // this.handleUpdateCartItem = this.handleUpdateCartItem.bind(this);
        this.totalPrice = this.totalPrice.bind(this);
        this.render=this.render.bind(this)
        
    };

    componentDidMount(){
        this.props.fetchCartItems();
    };

    handleUpdateCartItem(item){
        return (event) => {this.props.updateCartItem({id: item.id });
        }

    };

    handleRemoveCartItem(cartItemId){
        return event => {this.props.removeCartItem(cartItemId)
            .then(()=> this.props.fetchCartItems())
            .then(()=> window.location.reload(true))
        }     
    };

    totalPrice(){
        // debugger
        let price = 0.00;
        this.props.itemsArray.forEach(item => {
            price += (item.price * 1.00)
        });
        console.log(price)
        console.log(this.props.itemsArray)
        return price * 1.00;
        
    }
    

    directToProduct(productId){
        return event => {this.props.history.push(`/products/${productId}`)} 
    }

    
    render(){
        
        let {itemsArray, currentUserId} = this.props;
        let filteredArray = itemsArray.filter(item => item.userId === currentUserId)
        let itemsLi;
        if (itemsArray.length > 0 ){
            itemsLi = filteredArray.map((item, idx) => {

                
                
                return (
                    <li key={shortid.generate()}>
                        
                        <div className="item-info">
                            <div className="item-details">
                                <img src={item.photoUrl} onClick={this.directToProduct(item.productId)} className='cart-thumbnails'/>
                                <div>
                                    
                                    <p onClick={this.directToProduct(item.storeId, item.name)}>{item.name}</p>
                                    <button className="clicky" onClick={this.handleRemoveCartItem(item.id)}>Delete<FaTrashAlt/></button>
                                    
                                </div>
                            </div>

                            <div className="price-column">
                                <p>(US$ {item.price} )</p>
                            </div>

                           
                        </div>
                       

                    </li>
                )
            });

        } else {
            itemsLi = (
                <div></div>
            )
        };
        
        return (
            <div className="cart-items-checkout">
                <ul className="cart-items-list">
                    <h2>{filteredArray.length} item(s) in your cart</h2>
                    {itemsLi}
                </ul>

                <ul className="checkout">
                    <div className="product-total">Total
                        <li className='cart-product-labels'>
                            <p className='checkout-label'>Item total</p>
                            <p>US$ {this.totalPrice()}</p>
                        </li>
                        <li className='cart-product-labels'>
                            <p className='checkout-label'>Shipping</p>
                            <p>App Academy</p>
                            <p>825 Battery St</p>
                            <p>San Francisco, CA 94111,</p>
                        </li>
                    </div>
                    <br/>
                    <br/>
                    <div className="final-price-checkout">
                        <p className='checkout-label'>Total</p>
                        <p>US$ {this.totalPrice()}</p>
                    </div>
                    <div className='checkout-position'>
                    <button className="checkout-button">Proceed to checkout</button>
                    </div>
                </ul>
            </div>
            
        )
    };
}

export default CartItems;