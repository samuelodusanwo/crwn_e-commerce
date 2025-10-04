import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './users/user-reducer';
import cartReducer from './cart/cart-reducer';
import categoryReducer from './category/category-reducer';
import storeReducer from './shop/shop-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'user', 'category', 'store']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    category: categoryReducer,
    store: storeReducer,
})

export default persistReducer(persistConfig, rootReducer);