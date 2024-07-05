import { ADD_PRODUCT, DELETE_PRODUCT, END_POINT_EXISTS, PRODUCT_LIST, SET_PRODUCT_LIST, SET_REQUEST_FAILED, UPDATE_PRODUCT } from "./types";

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
    // console.log(id)
    return {
        type: DELETE_PRODUCT,
        id
    }
}
export const endPointExists = (id) => {
    return {
        type: END_POINT_EXISTS,
        id
    }
}
export const updateProduct = (data) => {
    console.log("action", data)
    return {
        type: UPDATE_PRODUCT,
        data
    }
}


export const requestFailed = (error) => {
    return {
        type: SET_REQUEST_FAILED,
        error
    }
}