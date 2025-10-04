import api from "../../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constant";
import { userActionType } from "./user.type";

export const setCurrentUser = (user) => ({
    type: userActionType.SET_CURRENT_USER,
    payload: user
});

export const logoutUser = () => ({
    type: userActionType.LOGOUT
})

export const loginUser = (username, password) => {
    return async (dispatch) => {
        try {
            const res = await api.post("/api/token/", {username, password})
            if (res.status === 200){
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)

                const userRes = await api.get("/api/user/me/")
                const userData = userRes.data

                dispatch({
                    type: userActionType.LOGIN_SUCCESS,
                    payload: userData
                })
            }
        } catch (err) {
            dispatch({
                type: userActionType.LOGIN_ERROR,
                payload: err.response?.data || err.message
            })
        }
    }
}

export const fetchUser = () => {
    return async (dispatch) => {
        try {
            const res = await api.get("/api/user/me/")
            if (res.status === 200) {
                dispatch ({
                    type: userActionType.SET_CURRENT_USER,
                    payload: res.data
                })

            }
        } catch (err) {
            console.log(err)
        } 
    }
}