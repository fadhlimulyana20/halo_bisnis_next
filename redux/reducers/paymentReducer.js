const initialState = {
    is_loading : false,
    is_account_loading : false,
    payment_method : [],
    payment_account : [],
    is_making_payment : false,
    payment : null,
}

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PAYMENT_METHOD_LOADING":
            return {
                ...state,
                is_loading : true
            }
        case "PAYMENT_METHOD_LOADED":
            return {
                ...state,
                is_loading : false,
                payment_method : action.payload
            }
        case "PAYMENT_ACCOUNT_LOADING":
            return{
                ...state,
                is_account_loading : true
            }
        case "PAYMENT_ACCOUNT_LOADED":
            return{
                ...state,
                is_account_loading : false,
                payment_account : action.payload
            }
        case "MAKE_PAYMENT":
            return{
                ...state,
                is_making_payment : true
            }
        case "MAKE_PAYMENT_SUCCESS":
            return{
                ...state,
                is_making_payment : false,
                payment : action.payload
            }
        case "MAKE_PAYMENT_FAILED":
            return{
                ...state,
                is_making_payment : false,
                payment : action.payload
            }
        default:
            return state;
    }
}

export default paymentReducer;