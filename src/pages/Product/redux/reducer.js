import { combineReducers } from '@reduxjs/toolkit';

import productListReducer from '../List/redux/productListState';
import productDetailReducer from '../Detail/redux/productDetailState';

// eslint-disable-next-line import/prefer-default-export
export const productReducer = combineReducers({
  list: productListReducer,
  detail: productDetailReducer,
});
