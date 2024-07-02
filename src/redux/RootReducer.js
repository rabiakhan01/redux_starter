import { combineReducers } from "redux";
import cartItems from './Cart/reducer';
import informationData from "./Information/reducer";
import productData from "./Product/reducer";

export default combineReducers({
    cartItems,
    informationData,
    productData,
})
