import api from '../../api'
import { ShopType } from './shop-type';
import { CategoryType } from '../category/category-type';


// create store
export const createShopFunction = (data) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            formData.append("name", data.shopName,)
            formData.append("phone_number", data.shopPhoneNumber)
            formData.append("logo", data.shopLogo)

            console.log("datasss...", data)

            const res = await api.post('/api/new-store/', formData, {
                headers: {"Content-Type": "multipart/form-data"}
            })
            if (res.status === 201){
                alert("Shop created successfully")
            } else {
                alert("Failed to create shop")
                console.log(res.message)
            }
        } catch (err) {
            console.log(err)
        }
    }
}

// fetch all stores
export const fetchAllStores = () => {
    return async (dispatch) => {
        try {
            const res = await api.get('/api/list-store/')
            if (res.status === 200) {
                dispatch({
                    type: ShopType.STORES,
                    payload: res.data
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}

// fetch user shop
export const fetchUserShop = () => {
    return async (dispatch) => {
        try {
            const res = await api.get("/api/user/shop/")
            if (res.status === 200){
                dispatch({
                    type: ShopType.USER_SHOP,
                    payload: res.data
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}

// Fetch all Products by shop
export const fetchAllProduct = (store_id) => {
    return async (dispatch) => {
        try {
            const res = await api.get(`/api/productByShop/${store_id}/`)

            if (res.status === 200) {
                dispatch({
                    type:  ShopType.PRODUCT_BY_SHOP,
                    payload: res.data
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}

// Fetch all product 
export const totalProduct = () => {
    return async (dispatch) => {
        try {
            const res = await api.get("/api/collections/");
            if (res.status === 200) {
                dispatch({
                    type: CategoryType.PRODUCT_BY_CATEGORY,
                    payload: res.data
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}