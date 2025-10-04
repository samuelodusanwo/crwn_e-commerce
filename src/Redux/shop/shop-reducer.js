import { ShopType } from "./shop-type"

const INITIAL_STATE = {
    stores: [],
    collections: [],
    userShop: [],
}

const storeReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ShopType.STORES:
            return {
                ...state,
                stores: action.payload
            };
        case ShopType.SHOP:
            return {
                ...state,
                collections: action.payload
            }
        case ShopType.USER_SHOP:
            return {
                ...state,
                userShop: action.payload
            }
        default:
            return state
    }
}

export default storeReducer;