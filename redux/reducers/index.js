import { combineReducers } from 'redux';
import productReducer from './productReducer';
import authReducer from './authReducer';
import sampleReducer from './sampleReducer';
import invoiceReducer from './invoiceReducer';
import projectReducer from './projectReducer';
import cartReducer from './cartReducer';
import serviceReducer from './serviceReducer';
import paymentReducer from './paymentReducer';

export default combineReducers({
    productReducer,
    authReducer,
    sampleReducer,
    invoiceReducer,
    projectReducer,
    cartReducer,
    serviceReducer,
    paymentReducer, 
});