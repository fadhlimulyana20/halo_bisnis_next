import axios from "axios";
import {main_url} from "./api";

export const loadProductSample = () => (dispatch) => {
    dispatch({type : "LOADING_PRODUCT_SAMPLE"});

    const config ={
        headers : {
            'Content-Type' : 'application/json',
        }
    }

    const url = `${main_url}/api/sample/product_sample`

    axios.get(url, config)
    .then(res => {
        dispatch({
            type : "PRODUCT_SAMPLE_LOADED",
            payload : res.data
        })
    }).catch(err => {
        dispatch({
            type : "PRODUCT_SAMPLE_NOT_LOADED",
            payload : err.response
        })
    });

}