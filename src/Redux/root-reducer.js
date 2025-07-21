import { combineReducers } from 'redux';
import userReducer from './users/user-reducer';
import cartReducer from './Cart/cart-reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
});