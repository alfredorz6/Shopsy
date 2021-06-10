import React from 'react';
import {Link} from 'react-router-dom'
import Loading from '../loading'

import CreateProductContainer from '../products/create_product_container'
import ProductIndexItem from '../products/product_index_item';

class StoreShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchStore(this.props.storeId);
        this.props.fetchProducts(this.props.storeId)
    }

    render() {
           
        const { store, currentUserId, products } = this.props;
        let productArr= Object.values(products)
        let component;
        
        
        if (store ) {
            let edit;
            if (store.ownerId === currentUserId) {
                edit = <div className='store-links'>
                    <div className='edit-store'><Link to={`/stores/${store.id}/edit`} >Edit Store</Link></div>
                    <div className='store-product-add'><Link to={`/stores/${store.id}/products/new`}>Add item</Link></div>
                    </div>
            } else {
                edit = ''
            }

            component = (<div className='store'>
                <div className='store-owner'> <h3>Welcome to {store.ownerName}'s Store</h3></div>
                <div className='store-title'> <h1>{store.name}</h1> </div>
                <p className='store-description'>{store.description}</p>
                <div className='store-product'>
                    {productArr.map( product => <ProductIndexItem product={product} key={product.id}/> )}
                </div>
                {edit}               
            </div>)
        } else {
            <Loading />
        }

        return (
            <div>
                {component}
                
            </div>
        );
    }
}

export default StoreShow;