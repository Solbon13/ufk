const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    //preloader
    isFetching: true,
}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true  
            }
        default:
            return state
    }
}

export const setAuthUserData = (id, login, email) => {
    return { type: SET_USER_DATA, data: {id, login, email} }
}

export default authReducer