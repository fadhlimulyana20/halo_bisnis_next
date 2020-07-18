const initialState = {
    isLoading : false,
    product : [],
    filtered_product : [],
    product_detail : null,
    user_product : [],
    user_product_detail : null
}

const productReducer = (state = initialState, action) =>{
    switch(action.type){
        case "PRODUCT_LOADING":
            return {
                ...state,
                isLoading : true,
            }
        case "PRODUCT_LOADED":
            return {
                ...state,
                isLoading : false,
                product : action.payload,
                filtered_product : action.payload
            }
        case "PRODUCT_DETAIL_LOADED":
            return {
                ...state,
                isLoading : false,
                product_detail : action.payload
            }
        case "PRODUCT_DETAIL_NOT_LOADED":
            return{
                ...state,
                isLoading : false,
                product_detail : action.payload
            }
        case "FILTER_PRODUCT_BY_TYPE":
            let new_state = Object.assign({}, state);

            let product_type = action.payload.type;
            // console.log(product_type);
            let filtered_value = state.product.filter(product => product.type.toLowerCase().includes(product_type.toLowerCase()));

            // let appliedFilters = state.appliedFilters;
            if(product_type){
                new_state.filtered_product = filtered_value
            }else{
                new_state.filtered_product = new_state.product;
            }

            return new_state;
        case "USER_PRODUCT_LOADED":
            return {
                ...state,
                user_product : action.payload
            }
        case "USER_PRODUCT_DETAIL_LOADED":
            return {
                ...state,
                user_product_detail : action.payload
            }
        default:
            return state;
    }
}

export default productReducer;