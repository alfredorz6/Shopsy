import React from 'react';
import { Link } from 'react-router-dom';

const Featured = (props) => {
    return (
        <ul className="product-feature">
            {props.products.map(product=> <li className="product-list-index" key={product.id}>
            <p className='feature-name'>{product.name}</p>
            <Link to={`/products/${product.id}`}>
                <img className="product-image" src={product.imageUrl} />
            </Link>
            <p className="feature-store">{product.storeName}</p>
            <p className="product-price">${product.price}</p>
        </li>)}
        </ul>
    )
}

export default Featured;