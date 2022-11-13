import {createSlice} from "@reduxjs/toolkit";

export const productListSlice = createSlice({
    name: 'productList',
    initialState: {
        payload: [],
        error: null,
        isLoading: false
    },
    reducers: {
        getProductsRequest: state => {
            state.isLoading = true;
            state.error = null;
        },
        getProductsSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.error = null;
            state.payload = payload
        },
        getProductsFail: (state, {payload}) => {
            state.isLoading = false;
            state.error = payload
        },
    }
})

export const {getProductsRequest, getProductsSuccess, getProductsFail} = productListSlice.actions;
export default productListSlice.reducer;