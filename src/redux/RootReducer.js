import { combineReducers } from "redux";
import cartItems from './Cart/reducer';
import Response from "./Product/reducer";

export default combineReducers({
    cartItems,
    Response,
})
