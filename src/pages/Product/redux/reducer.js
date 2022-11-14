import {combineReducers} from "@reduxjs/toolkit";

import productListReducer from "../List/redux/productListState";
import productDetailReducer from "../Detail/redux/productDetailState";

export const productReducer = combineReducers({
    list: productListReducer,
    detail: productDetailReducer,
})
