import { CartType } from "./cart.type"

const INITIALSTATE = {
    hidden: false,
    cartItem: []
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
                cartItem: [...state.cartItem, action.payload]
            }
        default:
            return state
    }
}

export default cartReducer;