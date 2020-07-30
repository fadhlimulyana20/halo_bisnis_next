// import { HYDRATE } from 'next-redux-wrapper';

// const intialState = {
//     tick : 'init'
// }

// const hydrateReducer = (state = intialState, action) => {
//     switch (action.type) {
//         case HYDRATE:
//             // Attention! This will overwrite client state! Real apps should use proper reconciliation.
//             return {...state, ...action.payload};
//         case 'TICK':
//             return {...state, tick: action.payload};
//         default:
//             return state;
//     }
// }

// export default hydrateReducer;