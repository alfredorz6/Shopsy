import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import Modal from "./modal/modal";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className='App'>
    <header className='head'>
      <Link to="/" className="header-link">
        <h1>Shopsy</h1>
      </Link>
      <GreetingContainer />
      <Modal />
    </header>
  
  </div>
);

export default App;
