import { combineReducers } from 'redux';

import users from './users_reducer';
import stores from './store_reducers'

export default combineReducers({
  users,
  stores
});
