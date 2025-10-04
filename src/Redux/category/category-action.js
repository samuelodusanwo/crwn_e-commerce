import api from "../../api";
import { CategoryType } from '../../Redux/category/category-type';


export const CategoryAction = item => ({
    type: CategoryType.CATEGORIES,
    payload: item
})

export const fetchShopCollection = () => {
    return async (dispatch) => {
        try {
            const res = await api.get("/api/categories/")
            if (res.status === 200){
                dispatch({
                    type: CategoryType.COLLECTIONS,
                    payload: res.data
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}

// fetch product by category
export const fetchAllDetailedProduct = (category_id) => {
    return async (dispatch) => {
        try {
            const res = await api.get(`/api/category/${category_id}/`)

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

// create post
export const createProduct = (data) => {
    return async (dispatch) => {
        try {
            const res = await api.post(`/api/product/create/`, data, {
                headers: {"Content-Type": "multipart/form-data"}
            })
            if (res.status === 201){
                alert("Created Successfully")
            } else {
                alert("Failed to create data")
            }
        } catch (err) {
            console.error("Create Product error", err)
        }
    }
}