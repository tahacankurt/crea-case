import {createSlice} from "@reduxjs/toolkit";

const COMMENT_INITIAL_STATE = {
    payload: [],
    error: null,
    isLoading: true
}

const INITIAL_STATE = {
    payload: {},
    error: null,
    comment: COMMENT_INITIAL_STATE,
    isLoading: true
}

export const productDetailSlice = createSlice({
    name: 'product/detail',
    initialState: INITIAL_STATE,
    reducers: {
        // Product
        getProductRequest: state => {
            state.isLoading = true;
            state.error = null;
        },
        getProductSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.error = null;
            state.payload = payload
        },
        getProductFail: (state, {payload}) => {
            state.isLoading = false;
            state.error = payload
        },
        updateProductRequest: state => {
            state.isLoading = true;
            state.error = null;
        },
        updateProductSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.error = null;
            state.payload = payload
        },
        updateProductFail: (state, {payload}) => {
            state.isLoading = false;
            state.error = payload
        },
        resetPageState: (state) => {
            return INITIAL_STATE
        },
        // Comments
        getCommentsRequest: state => {
            state.comment.isLoading = true;
            state.comment.error = null;
        },
        getCommentsSuccess: (state, {payload}) => {
            state.comment.isLoading = false;
            state.comment.error = null;
            state.comment.payload = payload
        },
        getCommentsFail: (state, {payload}) => {
            state.comment.isLoading = false;
            state.comment.error = payload
        },
        createCommentRequest: state => {
            state.comment.isLoading = true;
            state.comment.error = null;
        },
        createCommentSuccess: (state, {payload}) => {
            state.comment.isLoading = false;
            state.comment.error = null;
            state.comment.payload = [payload,...state.comment.payload]
        },
        createCommentFail: (state, {payload}) => {
            state.comment.isLoading = false;
            state.comment.error = payload
        },
        resetCommentState: (state) => {
            return INITIAL_STATE
        },
    }
})

export const {
    getProductRequest, getProductSuccess, getProductFail, resetPageState,
    getCommentsRequest, getCommentsSuccess, getCommentsFail,
    createCommentRequest, createCommentSuccess, createCommentFail
} = productDetailSlice.actions;

export default productDetailSlice.reducer;