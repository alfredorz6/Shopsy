import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import NavBarContainer from './naviBar/navBar_container.js';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal/>
    <header>
      <NavBarContainer />
      <GreetingContainer />
    </header>
    <main className='body'>

    </main>
    
  </div>
);

export default App;
