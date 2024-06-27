import { ADD_TO_CART, REMOVE_TO_CART, UPDATE_TO_CART } from "./types";

export default function cartItems(state = [], action) {
    // console.log("action", action)
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data,
            ]

        case REMOVE_TO_CART:
            return state.filter((product) => product.id !== action.id)

        case UPDATE_TO_CART:
            const updatedCartItems = state.map((item) => {
                if (item.id === action.data.id) {
                    return action.data
                }
                else {
                    return item
                }
            })
            return updatedCartItems.filter((item) => item.quantity > 0)

        default:
            return state;
    }
}