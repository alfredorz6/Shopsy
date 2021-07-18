import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = props => {
    return (
        
        <li className="product-list-index">
            <Link to={`/products/${props.product.id}`} className='product-index-name'>
                {props.product.name}
            </Link>
            <img className="product-pic" src={`${props.product.imageUrl}`} alt='product-image' /> 
            <p className="product-price">${props.product.price}</p>
        </li>
    )
}






export default ProductIndexItem;