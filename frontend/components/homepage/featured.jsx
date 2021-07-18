import React from 'react';
import { Link } from 'react-router-dom';

const Featured = (props) => {
    let productArray = props.products
        
    let i = productArray.length
    let j = 0
    let temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = productArray[i];
        productArray[i] = productArray[j];
        productArray[j] = temp;

    }

    let source = productArray.splice(0, 5)
    
        
    

    return (
        <ul className="product-feature">
            {source.map(product=> <li className="product-list-index" key={product.id}>
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