import { userActionType } from "./user.type";

const INITIAL_STATE = {
    currentUser: null,
    error: null,
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case userActionType.LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case userActionType.LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case userActionType.LOGOUT:
            return state;
        default:
            return state;
    }
}

export default userReducer;
