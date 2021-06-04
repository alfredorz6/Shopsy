
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {createStore, fetchStores} from './actions/store_actions'
import * as API from './util/store_api_util'
document.addEventListener('DOMContentLoaded', () => {
  let store;
  
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store
  window.dispatch = store.dispatch
  window.createStore = createStore
  window.fetchStores = fetchStores
  window.apifetchstores = API.fetchStores
  window.apicreateStore = API.createStore
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
