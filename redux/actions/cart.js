import axios from "axios";
import {tokenConfig} from "./auth";
import {main_url} from "./api";
import {makeInvoiceProductItem, invoiceDetailLoad} from "./invoice";

export const addToCart = (product, user, amount) => (dispatch, getState) =>{
    const body = {
        product : product,
        amount : amount
    }

    const body_to_post = {
        product : product.id,
        amount : amount,
        user : user
    }

    const json = JSON.stringify(body_to_post);

    const url = main_url+'/api/product_basket/';

    axios.post(url, json, tokenConfig(getState))
    .then(res=>{
        dispatch({
            type : "ADD_TO_CART",
            payload : body
        });
        console.log(res.data);
    }).catch(err=>{
        console.log(err.response);
    });
    
}

const deleteFromDB = (cart) => (dispatch, getState) => {

    const url = main_url+'/api/product_basket/';
    
    axios.delete(url+`${cart[0].id}`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type : "DELETE_FROM_CART",
            payload : cart[0],
        })
    }).catch(err => {
        dispatch({
            type : "DELETE_FROM_CART_ERROR"
        })
    })

}

export const deleteFromCart = cart => (dispatch, getState) =>{
    const url = main_url+'/api/product_basket/';

    axios.get(url+`?product=${cart.product.id}`, tokenConfig(getState))
    .then(res => {
        console.log(res.data)
        dispatch(deleteFromDB(res.data));
    }).catch(err => {
        dispatch({
            type : "GET_CART_FAILED",
            payload : err.response
        })
    })
}

// const storeCart = (cart, user) => (dispatch, getState) => {
//     const body = {

//     }
// }

export const modifyCart = (amount, cart_id) => (dispatch, getState) => {
    const obj = {
        amount : amount
    }

    const body = JSON.stringify(obj);

    axios.patch(`${main_url}/api/product_basket/${cart_id}/`, body, tokenConfig(getState))
    .then(res=>{
        dispatch({
            type : "MODIFY_CART",
            payload : res.data
        })
        console.log(res.data);
    }).catch(err=>{
        dispatch({
            type : "MODIFY_CART_FAIL",
            payload : err.response
        })
    })
}

export const loadCart = () => (dispatch, getState) => {
    dispatch({
        type : "LOADING_CART"
    });

    axios.get(`${main_url}/api/product_basket_list`, tokenConfig(getState))
    .then(res=>{
        dispatch({
            type : "LOAD_CART",
            payload : res.data
        })
    }).catch(err=>{
        dispatch({
            type : "LOAD_FAIL_CART",
            payload : err.response
        })
    })
}

const deleteFromCartLocally = (id) => (dispatch) => {
    dispatch({
        type : "DELETE_FROM_CART",
        payload : id,
    })
}

const checkoutCartById = (cart) => (dispatch, getState) => {
    const url = main_url+'/api/product_basket/';

    const body = {
        is_checked_out : true
    }

    console.log(cart[0].id);

    axios.patch(url+`${cart[0].id}/`, JSON.stringify(body), tokenConfig(getState))
    .then(res => {
        dispatch({
            type : "CHECKOUT_SUCCESS",
            payload : res.data
        });
    }).catch(err => {
        dispatch({
            type : "CHECKOUT_FAILED",
            payload : err.response
        })
    })
}

export const checkoutCart = (invoice, cart) => (dispatch, getState) => {
    dispatch({
        type : "PROCESSING_CHECKOUT"
    });

    const url = main_url+'/api/product_basket/';
    const invoice_id = invoice.id

    cart.forEach(element => {
        console.log(element.product.id);
        axios.get(url+`?product=${element.product.id}`, tokenConfig(getState))
        .then(res => {
            console.log(res.data)
            dispatch(checkoutCartById(res.data));
            dispatch(makeInvoiceProductItem(res.data, invoice_id));
        }).catch(err => {
            dispatch({
                type : "GET_CART_FAILED",
                payload : err.response
            })
        })
    });

    dispatch(invoiceDetailLoad(invoice_id));
}



//  