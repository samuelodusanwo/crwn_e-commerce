import { CartType } from "./cart.type"

const INITIALSTATE = {
    hidden: false
}

const cartReducer = (state=INITIALSTATE, action) => {
    switch (action.type) {
        case CartType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state
    }
}

export default cartReducer;