import React from 'react';
import Loading from '../loading';
import ProductIndexItem from './product_index_item';

class Products extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const { products, updateProduct } = this.props;

        return (
            <div className= 'item-list'>
                <ul>
                    {
                    products.map(product => (
                        <ProductIndexItem product={product} key={product.id} updateProduct={updateProduct}/> )) 
                    }
                </ul>
            </div>
        )
    }
}

export default Products;