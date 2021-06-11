# README

### [Shopsy](https://shoopsy.herokuapp.com/#/)

![](https://open-uri.s3.us-west-1.amazonaws.com/others/main+page.jpg)

## Built with
* React.js
* Redux.js
* Ruby on Rails
* PostgreSQL

## Deployment
Hosted on [Heroku](heroku.com)

## Features

* Secure backend to frontend User Authentication using BCrypt

* Store: Users are able to create a store where they list, edit or remove their products.
  - A function to add images directly on the creating form will be implemented in the near future

* Shopping Cart: User can add or Remove products of the shopping cart.
  - The cart will automatically update prices

## Future Implementations

* Product reviews.

* Product search.

* Image handler in the store and product forms.

* Categories and favorites functionality.

* Optimization of the visual factor

## Aditional Resources

Please refer to our [Wiki](https://github.com/alfredorz6/Shopsy/wiki)

## Code Samples

The posibility of showing the products in their respective store was thanks to a modification to the usual index render 
like show in the following code snipet

```ruby
def index
        
    unless params[:storeId]
        @products = Product.all

    else
        @products = Product.where(store_id: params[:storeId])
    end

    render :index
end
```
Afterwards adjusting the Ajax request
```Javascript
export const fetchAllProducts = (storeId) => {
    
    if (storeId === undefined) {
        return $.ajax({
            url: 'api/products',
            method: "GET"
        })
    } else {
        return $.ajax({
            url: 'api/products',
            method: "GET",
            data: {storeId: storeId}
        })
    }
}
```
also here a sample of my homepage code

```Javascript
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
                <h2>A New Day, New Needs!</h2>
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
                    <Featured products={products.slice(13, 18)} />
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
```

