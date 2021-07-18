import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import Homepage from './homepage/homepage'
import NavBarContainer from './naviBar/navBar_container.js';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import ProductIndexContainer from './products/product_index_container'
import CreateStoreContainer from './store/create_store_container'
import CreateProductContainer from './products/create_product_container'
import StoreShowContainer from './store/store_show_container';
import ProductShowContainer from './products/product_show_container'
import EditStoreFormContainer from './store/edit_store_container';
import CartItemContainer from './cart/cart_item_container';
import SearchShowContainer from './searchBar/search_show'
import { AuthRoute, ProtectedRoute, NotAuthRoute } from '../util/route_util';
import Footer from './footer/footer'

const App = () => (
  <div>
    <Modal/>
    <header>
      <NavBarContainer />
      <GreetingContainer />
    </header>
    
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <ProtectedRoute exact path="/stores/new" component={CreateStoreContainer} />
      <ProtectedRoute path="/stores/:storeId/edit" component={EditStoreFormContainer} />
      <ProtectedRoute exact path='/cart_items' component={CartItemContainer}/>
      <Route exact path='/stores/:storeId' component={StoreShowContainer} />
      <ProtectedRoute exact path="/stores/:storeId/products/new" component={CreateProductContainer} />
      <Route path='/products/:productId' component={ProductShowContainer}/>
      <Route exact path="/products" component={ProductIndexContainer}/>
      <Route path="/search" component={SearchShowContainer}/>
          
    </Switch>
    <Footer/>
  </div>
);

export default App;
