
const initialState = {
    is_service_loading : false,
    service_type : [],
}

const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SERVICE_TYPE_LOADED":
            return {
                ...state,
                service_type : action.payload
            }
        case "SERVICE_TYPE_NOT_LOADED":
            return {
                ...state,
                service_type : action.payload
            }
        default:
            return state;
    }
}

export default serviceReducer;