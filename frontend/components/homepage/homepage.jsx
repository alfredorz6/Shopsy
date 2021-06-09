import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import { fetchStores } from '../../actions/store_actions';
import { Link } from 'react-router-dom';


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
                <h2>A New Day, New Needs!</h2>
                <br/>
                <h3>Explore our varied stores</h3>
                <div className='ribbon'>
                    
                    {stores.map( store => <Link to={`/stores/${store.id}`} key={store.id}>
                        <button className='image-circle' src='' alt='store-Logo' /> 
                        <br/>
                        <h6 className='store-ribbon'>{store.name}</h6>
                    </Link> )}
                </div>
                <br/>
                <h2 className='sub-banner'>We make buying what you need easier everyday... </h2>
                <div className='banner'>

                </div>
            </div>
        )
    }
}
//{`sourcetobedefined/store${store.id}.jpg`}

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