import { ADD_TO_CART, REMOVE_TO_CART, UPDATE_TO_CART } from './types';
export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        data,
    }
}
export const removeToCart = (id) => {
    return {
        type: REMOVE_TO_CART,
        id,
    }
}

export const updateCart = (data) => {
    return {
        type: UPDATE_TO_CART,
        data,
    }
}