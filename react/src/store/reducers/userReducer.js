import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    userInfo: null,
    searchQuery: null
}

//cái này hồi trước để là appReducer, mà thấy sai sai nên sửa lại. Có bị lỗi mấy cái đăng nhập, đăng ký thì vào đây xem thử
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userInfo: action.userInfo
            }
        case actionTypes.USER_REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userInfo: action.userInfo
            }
        case actionTypes.USER_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null
            }
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null
            }
        // case actionTypes.SET_SEARCH_QUERY:
        //     return {
        //         ...state,
        //         searchQuery: action.searchQuery
        //     }
        default:
            return state;
    }
}

export default userReducer;