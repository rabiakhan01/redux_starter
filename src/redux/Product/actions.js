import { ADD_PRODUCT, DELETE_PRODUCT, PRODUCT_LIST, SET_PRODUCT_LIST } from "./types";

export const productList = () => {

    return {
        type: PRODUCT_LIST,
    }
}
export const setProductList = (data) => {

    return {
        type: SET_PRODUCT_LIST,
        data,
    }
}

export const addProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        data
    }
}

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        id
    }
}