import {tokenConfig} from "./auth";
import axios from "axios";
import {main_url} from "./api";
import {checkoutCart} from "./cart";

export const invoiceLoad = () => (dispatch, getState) => {
    // Give status to redux, now is user loading process
    dispatch({type : "INVOICE_LOADING"});

    // Load User
    axios.get(`${main_url}/api/invoice_product`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type : "INVOICE_LOADED",
            payload : res.data
        })
    }).catch(err => {
        dispatch({ 
            type : "INVOICE_LOAD_ERROR" ,
            payload : err.response
        });
    })
}

export const invoiceDetailLoad = (id) => (dispatch, getState) => {
    dispatch({type : "INVOICE_LOADING"});

    const url_invoice = main_url+`/api/invoice_product/${id}`;
    const url_invoice_item = main_url+`/api/invoice_product_item/?invoice=${id}`;

    const request_invoice = axios.get(url_invoice, tokenConfig(getState));
    const request_invoice_item = axios.get(url_invoice_item, tokenConfig(getState));

    axios.all([request_invoice, request_invoice_item])
    .then(axios.spread((...response)=>{
        const res = {
            invoice : response[0],
            invoice_item : response[1]
        }
        dispatch({
            type : "INVOICE_DETAIL_LOAD",
            payload : res
        });
    })).catch(err => {
        console.log(err.response);
    })
    
}

export const confirmInvoice = (id, id_confirm) => (dispatch, getState) => {
    const url_invoice = main_url+`/api/invoice_product/${id}/`;

    const body = {
        payment : id_confirm
    }

    axios.patch(url_invoice, JSON.stringify(body), tokenConfig(getState))
    .then(res => {
        dispatch({
            type : "INVOICE_CONFIRM_SUCCESS",
            payload : res.data
        })
    }).catch(err => {
        dispatch({
            type : "INVOICE_CONFIRM_FAILED",
            payload : err.response
        })
    })
}

export const makeInvoiceProduct = (user, cart) => (dispatch, getState) => {
    const url_invoice = main_url+'/api/invoice_product_create/';

    const body = ({
        user : user
    });

    axios.post(url_invoice, JSON.stringify(body), tokenConfig(getState))
    .then(res => {
        dispatch({
            type : "INVOICE_PRODUCT_CREATED",
            payload : res.data
        });
        dispatch(checkoutCart(res.data, cart));
    }).catch(err => {
        dispatch({
            type : "INVOICE_PRODUCT_NOT_CREATED",
            payload : err.response
        })
    })
}

export const makeInvoiceProductItem = (cart, invoice_id) => (dispatch, getState) => {
    const url_item = main_url+'/api/invoice_product_item_create/';

    const body = ({
        amount : cart[0].amount,
        product : cart[0].product,
        invoice : invoice_id
    })

    console.log(JSON.stringify(body));

    axios.post(url_item, JSON.stringify(body), tokenConfig(getState))
    .then(res => {
        dispatch({
            type : "INVOICE_PRODUCT_ITEM_ADDED",
            payload : res.data
        })
    }).catch(err => {
        dispatch({
            type : "INVOICE_PRODUCT_ITEM_NOT_ADDED",
            payload : err.response
        })
    })
}