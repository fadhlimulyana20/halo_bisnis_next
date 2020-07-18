const initialState = {
    is_loading : false,
    product_sample : []
}

const productSampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADING_PRODUCT_SAMPLE":
            return {
                ...state,
                is_loading : true
            }  
        case "PRODUCT_SAMPLE_LOADED":
            return {
                ...state,
                is_loading : false,
                product_sample : action.payload
            }
        case "PRODUCT_SAMPLE_NOT_LOADED":
            return {
                ...state,
                is_loading : false,
                product_sample : action.payload
            }
        default:
            return state;
    }
}

export default productSampleReducer;