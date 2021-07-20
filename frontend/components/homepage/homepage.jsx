import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import { fetchStores } from '../../actions/store_actions';
import { Link } from 'react-router-dom';
import Featured from './featured';


class Homepage extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchStores();
    }

    render() {
        const { products, stores } = this.props
        
        return (
            <div className='main-page'> 
                <h2 className='main-greeting'>A New Day, New Needs!</h2>
                <br/>
                <h3>Explore our varied stores</h3>
                <div className='ribbon'>
                    
                    {stores.map( store => <Link to={`/stores/${store.id}`} key={store.id}>
                        <img className='image-circle' src={`${store.imageUrl}`} alt='store-Logo' /> 
                        <br/>
                        <h6 className='store-ribbon'>{store.name}</h6>
                    </Link> )}
                </div>
                <br/>
                <div className='feature-products'>
                <br/>
                    <h5 className="products-header">Featuring products:</h5>
                    <Featured products={products} />
                </div>
                <h2 className='sub-banner'>We make buying what you need easier everyday... </h2>
                <div className='banner'>
                    <h3 className="intro">What's Shopsy</h3>
                    <p className='sub-intro'>its Easy, its an Etsy clone!</p>
                    <div className="banner-info">
                        <div className="info-column-1">
                            <h3>A community doing good</h3>
                            <p>Shopsy is a global online marketplace, 
                                where people come together to make, 
                                sell, buy, and collect unique items. 
                                We’re also a community pushing for 
                                positive change for small businesses, 
                                people, and the planet.
                            </p>
                        </div>
                        <div className='info-column-2'>
                            <h3>Support independent creators</h3>
                            <p>There’s no Shopsy warehouse – just millions 
                                of people selling the things they love. 
                                We make the whole process easy, helping you 
                                connect directly with makers to find something 
                                extraordinary.</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


const mstp = (state) => {
    return {
        products: Object.values(state.entities.products),
        stores: Object.values(state.entities.stores)
    }
}

const mdtp = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchStores: () => dispatch(fetchStores())
})

export default connect(mstp, mdtp)(Homepage);