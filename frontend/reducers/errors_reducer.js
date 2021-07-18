import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import stores from './store_errors_reducer'
import products from './product_errors_reducer'
import cartItem from './cart_items_errors_reducer';
import reviewErrors from './review_errors_reducer'

export default combineReducers({
  session,
  stores,
  products,
  cartItem,
  reviewErrors

});
