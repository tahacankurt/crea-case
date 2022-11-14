import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "../pages/Auth/redux/authState";
import {productReducer} from "../pages/Product/redux/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
})

export default rootReducer;