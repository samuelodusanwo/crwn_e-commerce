import { CartType } from "./cart.type";
import { addItemToCart } from "./cart.utils";

const INITIALSTATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state=INITIALSTATE, action) => {
    switch (action.type) {
        case CartType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;