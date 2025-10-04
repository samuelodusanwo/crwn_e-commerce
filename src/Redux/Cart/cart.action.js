import api from "../../api";
import { CartType } from "./cart.type";


export const toggleCartHidden = () => ({
    type: CartType.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: CartType.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartType.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CartType.CLEAR_ITEM_FROM_CART,
    payload: item
})

// api call for successfully payment and clear if carts
export const paymentField = (paymentData) => {
    return async (dispatch) => {
        try {
            const res = await api.post('/api/payment/', paymentData)
            if (res.status === 201){
                alert("Payment successfull!")
                dispatch({
                    type: CartType.DELETE_ALL_ITEMS_FROM_CART,
                })
            }
        } catch (err) {
            console.log("Payment error: ", err.response?.data || err.message)
        }
    }
}