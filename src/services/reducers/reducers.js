import { ADD_TO_CART } from "../constants";

export default function cartItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                data: action.data,
            }
            break;
        default:
            return state;
    }
}