import axios from "axios";
import { tokenConfig } from "./auth";
import { main_url } from "./api";

// Product List
export const loadProduct = () => (dispatch) =>{
    // Give status to redux, now is user loading process
    dispatch({type : "PRODUCT_LOADING"});

    // Headers
    const config ={
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    let url = `${main_url}/api/product`;
    // if(type){
    //     url = url + `/?type__name=${type}`
    // }

    // Load Product
    axios.get(url, config)
    .then(res => {
        dispatch({
            type : "PRODUCT_LOADED",
            payload : res.data
        })
    }).catch(err => {
        dispatch({ 
            type : "PRODUCT_NOT_LOADED" ,
            payload : err.response
        });
    })
}

export const loadProductByType = (type) => (dispatch) =>{
    // Give status to redux, now is user loading process
    dispatch({type : "PRODUCT_LOADING"});

    // Headers
    const config ={
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    let url = `${main_url}/api/product`;
    if(type){
        url = url + `/?type__name=${type}`
    }

    // Load Product
    axios.get(url, config)
    .then(res => {
        dispatch({
            type : "PRODUCT_LOADED",
            payload : res.data
        })
    }).catch(err => {
        dispatch({ 
            type : "PRODUCT_NOT_LOADED" ,
            payload : err.response
        });
    })
}

export const loadProductDetail = (id) => (dispatch) =>{
    // Give status to redux, now is user loading process
    dispatch({type : "PRODUCT_LOADING"});

    // Headers
    const config ={
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    // Load Product
    axios.get(`${main_url}/api/product/${id}`, config)
    .then(res => {
        dispatch({
            type : "PRODUCT_DETAIL_LOADED",
            payload : res.data
        })
    }).catch(err => {
        dispatch({ 
            type : "PRODUCT_DETAIL_NOT_LOADED" ,
            payload : err.response
        });
    })
}

export const filterByType = type => dispatch =>{
    console.log(type);
    dispatch({
        type : "FILTER_PRODUCT_BY_TYPE",
        payload : type
    });
}

export const loadUserProduct = () => (dispatch, getState) => {
    dispatch({type : "LOADING_USER_PRODUCT"});

    const url = `${main_url}/api/user_product`;

    axios.get(url, tokenConfig(getState))
    .then(res => {
        dispatch({
            type : "USER_PRODUCT_LOADED",
            payload : res.data
        })
    }).catch(err => {
        dispatch({
            type : "USER_PRODUCT_NOT_LOADED",
            payload : err.response
        })
    });

}

export const loadUserProductDetail = (id) => (dispatch, getState) => {
    dispatch({type : 'LOADING_USER_PRODUCT_DETAIL'});

    const url = `${main_url}/api/user_product/${id}`;
    console.log(url);

    axios.get(url, tokenConfig(getState))
    .then(res => {
        dispatch({
            type : "USER_PRODUCT_DETAIL_LOADED",
            payload : res.data
        })
    }).catch(err => {
        dispatch({
            type : "USER_PRODUCT_DETAIL_NOT_LOADED",
            payload : err.response
        })
    })
}