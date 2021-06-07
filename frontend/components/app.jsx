import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import NavBarContainer from './naviBar/navBar_container.js';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import CreateStoreContainer from './store/create_store_container'
import StoreShowContainer from './store/store_show_container';
import EditStoreFormContainer from './store/edit_store_container';
import { AuthRoute, ProtectedRoute, NotAuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal/>
    <header>
      <NavBarContainer />
      <GreetingContainer />
    </header>
    <Switch>
      <ProtectedRoute exact path="/stores/new" component={CreateStoreContainer} />
      <ProtectedRoute path="/stores/:storeId/edit" component={EditStoreFormContainer} />
      <Route path='/stores/:storeId' component={StoreShowContainer} />
      
    </Switch>
    
  </div>
);

export default App;
