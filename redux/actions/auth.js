import axios from 'axios';
import {main_url} from "./api"

// User Login
export const userLogin = (username, password) => (dispatch, getState) =>{
    // Headers
    dispatch({type : "USER_LOADING"});

    const config ={
        headers : {
            'Content-Type' : 'application/json'
        }
    }

     //strigify data to json
     const body = JSON.stringify({username, password});

    // Load User
    axios.post(`${main_url}/api/auth/login`, body, config)
    .then(res => {
        dispatch({
            type : "LOGIN_SUCCESS",
            payload : res.data
        })
    }).catch(err => {
        dispatch({ 
            type : "LOGIN_FAIL" ,
            payload : err.response
        });
    })

}

// User Register
export const userRegister = (username, email, first_name, last_name, password ) => (dispatch, getState) => {
        // Headers
        const config ={
            headers : {
                'Content-Type' : 'application/json'
            }
        }
    
         //strigify data to json
         const body = JSON.stringify({username, email, first_name, last_name, password});
    
        // Load User
        axios.post(`${main_url}/api/auth/register`, body, config)
        .then(res => {
            dispatch({
                type : "REGISTER_SUCCESS",
                payload : res.data
            })
        }).catch(err => {
            dispatch({ 
                type : "REGISTER_FAIL" ,
                payload : err.response
            });
        })
}

// User Load
// This function is used to load user from user API using token
export const userLoad = () => (dispatch, getState) => {
    // Give status to redux, now is user loading process
    dispatch({type : "USER_LOADING"});

    // Load User
    axios.get(`${main_url}/api/auth/myuser`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type : "USER_LOADED",
            payload : res.data
        })
    }).catch(err => {
        dispatch({ 
            type : "AUTH_ERROR" ,
            payload : err.response
        });
    })
}

export const userEditEmail = (email, password) => (dispatch, getState) => {
    dispatch({type : "USER_LOADING"});

    const url = `${main_url}/api/auth/email/update`;
    const body = JSON.stringify({email, password});

    axios.patch(url, body, tokenConfig(getState))
    .then(res => {
        dispatch({
            type : "USER_EDIT_EMAIL_SUCCESS",
            payload : res.data
        });
    }).catch(err => {
        dispatch({
            type : "USER_EDIT_EMAIL_FAILED",
            payload : err.response
        })
    });
}

// User Load
// This function is used to load user from user API using token
export const userLogout = () => (dispatch, getState) => {
    // Logout User
    axios.post(`${main_url}/api/auth/logout/`, null, tokenConfig(getState))
    .then(res => {
        dispatch({
            type : "LOGOUT_SUCCESS",
        })
    }).catch(err => {
        dispatch({ 
            type : "LOGOUT_FAIL" ,
            payload : err.response
        });
    })
}

export const changePassword = (old_password, new_password) => (dispatch, getState) =>{
        // Headers
        const config ={
            headers : {
                'Content-Type' : 'application/json'
            }
        }
    
        //strigify data to json
        const body = JSON.stringify({old_password, new_password});
    
        // Load User
        axios.patch(`${main_url}/api/auth/change_password`, body, tokenConfig(getState))
        .then(res => {
            console.log(body);
            dispatch({
                type : "PASSWORD_CHANGED",
                payload : res.data
            })
        }).catch(err => {
            dispatch({ 
                type : "PASSWORD_FAIL_TO_CHANGE" ,
                payload : err.response
            });
        })
}

export const changeUser = (first_name, last_name) => (dispatch, getState) =>{
    // Headers
    const config ={
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    //strigify data to json
    const body = JSON.stringify({first_name, last_name});

    const url = `${main_url}/api/auth/myuser`;

    // Load User
    axios.patch(url, body, tokenConfig(getState))
    .then(res => {
        console.log(body);
        dispatch({
            type : "USER_UPDATED",
            payload : res.data
        })
    }).catch(err => {
        dispatch({ 
            type : "USER_FAIL_TO_UPDATED" ,
            payload : err.response
        });
    })
}

// Token loader, grab token from reducer to put it on header 
export const tokenConfig = getState =>{
    // Get Token from State
    const token = getState().authReducer.token;

    // Headers
    const config ={
        headers : {
            'Content-Type' : 'application/json',
        }
    }

    //If token, add to headers config
    if(token){
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
}

export const tokenConfigFormData = getState =>{
    // Get Token from State
    const token = getState().authReducer.token;

    // Headers
    const config ={
        headers : {
            'Content-Type' : 'multipart/form-data'
        }
    }

    //If token, add to headers config
    if(token){
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
}