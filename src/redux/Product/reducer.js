import { PRODUCT_LIST } from "./types";

export default function productData(state = [], action) {

    switch (action.type) {
        case PRODUCT_LIST:
            return [
                ...state,
                action.data
            ]
        default:
            return state
    }
}