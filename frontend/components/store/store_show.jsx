import React from 'react';
import {Link} from 'react-router-dom'

import CreateProductContainer from '../products/create_product_container'

class StoreShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchStore(this.props.storeId);
    }

    render() {
        const { store, currentUserId } = this.props;
        
        let component;
        
        
        if (store) {
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
                {edit}
                {/* <CreateProductContainer/> */}
            </div>)
        } else {
            <p> loading... </p>
        }

        return (
            <div>
                {component}
                
            </div>
        );
    }
}

export default StoreShow;