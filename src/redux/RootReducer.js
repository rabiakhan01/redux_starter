import { combineReducers } from "redux";
import cartItems from './Cart/reducer';
import productData from "./Product/reducer";

export default combineReducers({
    cartItems,
    productData,
})
