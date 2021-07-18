import { combineReducers } from 'redux';

import users from './users_reducer';
import stores from './store_reducers'
import products from './product_reducer'
import cartItems from './cart_items_reducer';
import reviews from './review_reducer';
import search from './search_reducer';

export default combineReducers({
  users,
  stores,
  products,
  cartItems,
  reviews,
  
});
