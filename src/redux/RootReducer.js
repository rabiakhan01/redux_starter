import { combineReducers } from "redux";
import cartItems from './Cart/reducer';
import informationData from "./Information/reducer";
export default combineReducers({
    cartItems,
    informationData,
})
