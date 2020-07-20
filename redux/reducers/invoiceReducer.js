const initialState = {
    is_loading : false,
    invoices : [],
    invoice_detail : null,
    invoice_item : [],
    error : [],
    invoice_confirm : null,
}

const invoiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INVOICE_LOADING":
            return {
                ...state,
                is_loading : true,
            }
        case "INVOICE_LOADED":
            return {
                ...state,
                is_loading : false,
                invoices : action.payload
            }
        case "INVOICE_LOAD_ERROR":
            return {
                ...state,
                is_loading : false,
                error : action.payload
            }
        case "INVOICE_DETAIL_LOAD":
            return {
                ...state,
                is_loading : false,
                invoice_detail : action.payload.invoice.data,
                invoice_item : action.payload.invoice_item.data
            }
        case "INVOICE_CONFIRM_SUCCESS":
            return{
                ...state,
                invoice_detail : action.payload
            }
        case "INVOICE_CONFIRM_FAILED":
            return{
                ...state,
                invoice_confirm : action.payload
            }
        default:
            return state;
    }
}

export default invoiceReducer;