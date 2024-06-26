import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

export default function cartItems(state = [], action) {
    // console.log("action", action)
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data,
            ]
            break;
        case REMOVE_TO_CART:
            state.pop();
            return [
                ...state,
            ]
        default:
            return state;
    }
}