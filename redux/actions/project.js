
import axios from "axios";
import {main_url} from "./api";
import {tokenConfigFormData, tokenConfig} from "./auth";

export const createProject = (form_data) => (dispatch, getState) => {
    dispatch({
        type : "CREATING_PROJECT"
    })

    const url = main_url+'/api/project/project/';

    // const body = JSON.stringify({
    //     name, description, service, technology, design
    // });

    const config ={
        headers : {
            'Content-Type' : 'multipart/form-data'
        }
    }

    axios.post(url, form_data, tokenConfigFormData(getState))
    .then(res => {
        dispatch({
            type : "CREATE_PROJECT_SUCCESS",
            payload : res.data
        })
    }).catch(err => {
        dispatch({
            type : "CREATE_PROJECT_FAILED",
            payload : err.response
        })
    })
}

export const loadProject = () => (dispatch, getState) => {
    dispatch({
        type : "LOADING_PROJECT"
    });

    const url = main_url+'/api/project/project';

    axios.get(url, tokenConfig(getState))
    .then(res => {
        dispatch({
            type : "LOAD_PROJECT_SUCCESS",
            payload : res.data
        })
    }).catch(err => {
        dispatch({
            type : "LOAD_PROJECT_FAILED",
            payload : err.response
        })
    })
}

export const loadProjectDetail = (id) => (dispatch, getState) => {
    dispatch({
        type : "LOADING_PROJECT_DETAIL"
    });

    const url = main_url+`/api/project/project_detail/${id}`;

    axios.get(url, tokenConfig(getState))
    .then(res => {
        dispatch({
            type : "LOAD_PROJECT_DETAIL_SUCCESS",
            payload : res.data
        })
    }).catch(err => {
        dispatch({
            type : "LOAD_PROJECT_DETAIL_FAILED",
            payload : err.response
        })
    })
}