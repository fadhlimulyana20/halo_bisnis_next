import { combineReducers } from 'redux';
import productReducer from './productReducer';
import authReducer from './authReducer';
import sampleReducer from './sampleReducer';

export default combineReducers({
    productReducer,
    authReducer,
    sampleReducer
});