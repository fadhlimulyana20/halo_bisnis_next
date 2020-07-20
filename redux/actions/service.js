import axios from "axios"
import {main_url} from "./api";
import {tokenConfig} from "./auth";

export const loadServiceType = () => (dispatch, getState) =>{
    const url = main_url+'/api/service/service_type/';

    axios.get(url, tokenConfig(getState))
    .then(res => {
        dispatch({
            type : "SERVICE_TYPE_LOADED",
            payload : res.data
        })
    }).catch(err => {
        dispatch({
            type : "SERVICE_TYPE_NOT_LOADED",
            payload : err.response
        }) 
    })
}