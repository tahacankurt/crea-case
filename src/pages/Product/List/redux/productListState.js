/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  payload: [],
  error: null,
  isLoading: false,
};

export const productListSlice = createSlice({
  name: 'product/list',
  initialState: INITIAL_STATE,
  reducers: {
    getProductsRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getProductsSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.payload = payload;
    },
    getProductsFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    resetState: () => INITIAL_STATE,
  },
});

export const {
  getProductsRequest, getProductsSuccess, getProductsFail, resetState,
} = productListSlice.actions;
export default productListSlice.reducer;
