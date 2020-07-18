const initialState = {
    token : typeof window !== 'undefined' ? localStorage.getItem('token') : '',
    isAuthenticated : null,
    isLoading : false,
    user : null,
    update_user : null,
    change_password : null,
}

const authReducer = (state = initialState, action) =>{
    switch(action.type){
        case "USER_LOADING":
            return {
                ...state,
                isLoading : true,
            }
        case "USER_EDIT_EMAIL_FAILED":
            return {
                ...state,
                update_user : action.payload
            }
        case "USER_UPDATED":
        case "USER_EDIT_EMAIL_SUCCESS":
        case "USER_LOADED":
            return {
                ...state,
                isAuthenticated : true,
                isLoading : false,
                user : action.payload,
                update_user : null
            }
        case "REGISTER_SUCCESS":
        case "LOGIN_SUCCESS":
            if(typeof window !== 'undefined'){
                localStorage.setItem('token', action.payload.token)
            }
            return {
                ...state,
                ...action.payload,
                isAuthenticated :true,
                isLoading :false
            }
        case "AUTH_ERROR" :
        case "LOGOUT_SUCCESS":
        case "AUTH_FAIL":
        case "REGISTER_FAIL":
        case "LOGIN_FAIL":
            if (typeof window !== 'undefined'){
                localStorage.removeItem('token');
            }
            return{
                ...action.payload,
                state : undefined,
                token : null,
                isAuthenticated : null,
                isLoading : false,
                user : null,
                fail : true
            }
        case "PASSWORD_CHANGED" :
            return{
                ...state,
                change_password : action.payload
            }
        case "PASSWORD_FAIL_TO_CHANGE":
            return{
                ...state,
                change_password : action.payload
            }
        default:
            return state;
    }
}

export default authReducer;