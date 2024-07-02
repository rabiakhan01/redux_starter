import { SET_PRODUCT_LIST } from "./types";

export default function productData(state = [], action) {

    switch (action.type) {
        case SET_PRODUCT_LIST:
            return [...action.data]
        default:
            return state;
    }
}