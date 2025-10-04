import { CartType } from "./cart.type";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIALSTATE = {
    hidden: false,
    cartItems: []
}

const cartReducer = (state=INITIALSTATE, action) => {
    switch (action.type) {
        case CartType.CART_ITEM:
            return {
                ...state,
                cartItems: action.payload
            };
        case CartType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartType.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };
        case CartType.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case CartType.DELETE_ALL_ITEMS_FROM_CART:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state
    }
}

export default cartReducer;