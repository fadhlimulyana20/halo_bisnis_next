const initialState = {
    is_loading : false,
    cart : [],
    checkout : null,
}

const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case "STORE_CART_TO_DATABASE":
            return {
                ...state
            }
        case "ADD_TO_CART":
            var new_cart = Object.assign([], state.cart);
            var product_id = action.payload.product.id;
            var found = new_cart.find(elemment => elemment.product.id === product_id);

            if (found) {
                var index = state.cart.indexOf(found);
                // console.log(index);
                state.cart[index].amount = action.payload.amount;
                return{
                    ...state
                }
            }else {
                return{
                    ...state,
                    cart : [action.payload, ...state.cart]
                }
            }
        case "DELETE_FROM_CART":
            var new_cart = Object.assign([], state.cart);
            var product_id = action.payload.product;
            var found = new_cart.find(elemment => elemment.product.id === product_id);

            if (found) {
                var index = state.cart.indexOf(found);
                // console.log(index);
                state.cart.splice(index, 1);
                return{
                    ...state
                }
            }else {
                return{
                    ...state,
                }
            }
        case "LOADING_CART":
            return {
                ...state,
                is_loading : true,
            }
        case "LOAD_CART":
            var cart_list = Object.assign([], action.payload);
            var new_cart = []

            cart_list.forEach(element => {
                var dict = {
                    product : element.product,
                    amount : parseInt(element.amount)
                }
                new_cart.push(dict);
            });

            state.cart = new_cart;
            return {
                ...state,
                is_loading : false,
            }
        case "LOAD_FAIL_CART":
            return{
                ...state,
                is_loading : false,
            }
        case "CHECKOUT_SUCCESS":
            var new_cart = Object.assign([], state.cart);
            var product_id = action.payload.product;
            var found = new_cart.find(elemment => elemment.product.id === product_id);

            if (found) {
                var index = state.cart.indexOf(found);
                // console.log(index);
                state.cart.splice(index, 1);
                return{
                    ...state
                }
            }else {
                return{
                    ...state,
                }
            }
        case "DELETE_FROM_CART_ERROR":
        case "GET_CART_FAILED":
        case "CHECKOUT_FAILED":
            return{
                ...state,
                checkout : action.payload
            }
        default:
            return state;
    }
}

export default cartReducer;