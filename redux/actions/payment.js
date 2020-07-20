import axios from "axios";
import {main_url} from "./api";
import {tokenConfig} from "./auth";
import {confirmInvoice} from "./invoice"

export const loadPaymentMethod = () => (dispatch) => {
    const config ={
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    const url = main_url+'/api/payment_method/';

    dispatch({
        type : "PAYMENT_METHOD_LOADING"
    });

    axios.get(url, config)
    .then(res => {
        dispatch({
            type : "PAYMENT_METHOD_LOADED",
            payload : res.data
        });
    }).catch(err => {
        dispatch({
            type : "PAYMENT_METHOD_FAIL_TO_LOADED",
            payload : err.response
        })
    })

}

export const loadPaymentAccount = (id) => (dispatch) => {
    const config ={
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    dispatch({
        type : "PAYMENT_ACCOUNT_LOADING"
    });

    const url = main_url+`/api/payment_account/?method=${id}`;

    axios.get(url, config)
    .then(res=>{
        dispatch({
            type : "PAYMENT_ACCOUNT_LOADED",
            payload : res.data
        });
    }).catch(err=>{
        dispatch({
            type : "PAYMENT_ACCOUNT_FAIL_TO_LOAD",
            payload : err.response
        })
    });

}

export const makePayment = (method, provider_from, payment_from, name_from, payment_to, invoiceproduct) => (dispatch, getState) => {
    dispatch({type : "MAKE_PAYMENT"});

    const url = main_url+'/api/payment_confirmation/';

    const body = JSON.stringify({method, provider_from, payment_from, name_from, payment_to, invoiceproduct});
    console.log(body);

    axios.post(url, body, tokenConfig(getState))
    .then(res => {
        dispatch({
            type : "MAKE_PAYMENT_SUCCESS",
            payload : res.data
        });
        dispatch(confirmInvoice(invoiceproduct, res.data.id));
    }).catch(err => {
        dispatch({
            type : "MAKE_PAYMENT_FAILED",
            payload : err.response
        })
    })

}