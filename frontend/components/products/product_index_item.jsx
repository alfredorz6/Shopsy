import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = props => {
    return (
        <li className="product-list-index">
            <Link to={`/products/${props.product.id}`}>
                {props.product.name}
            </Link>
            <p className="product-price">${props.product.price}</p>
        </li>
    )
}

export default ProductIndexItem;