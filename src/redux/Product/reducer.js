import { SET_PRODUCT_LIST, SET_REQUEST_FAILED } from "./types";

export default function Response(state = [], action) {

    switch (action.type) {
        case SET_PRODUCT_LIST:
            return [
                ...action.data
            ]
        case SET_REQUEST_FAILED:
            return {
                error: action.error
            }
        default:
            return state;
    }

}