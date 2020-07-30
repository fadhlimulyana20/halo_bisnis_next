import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
// import {createWrapper, HYDRATE} from 'next-redux-wrapper';

const initialState = {};

const composedMiddlewares = applyMiddleware(thunkMiddleware);

const storeEnhancers = composeWithDevTools({
    name: "React-node-test"
  })(composedMiddlewares);

// const store = createStore(rootReducer);  
const store =  createStore(rootReducer, storeEnhancers);

export default store

// // export an assembled wrapper
// export const wrapper = createWrapper(makeStore, {debug: true});