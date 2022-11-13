import {createSlice} from "@reduxjs/toolkit";
import LocalStorage from "../../../utils/localStorage";

export const catSlice = createSlice({
    name: 'auth',
    initialState: {
        payload: new LocalStorage({key: 'auth'}).item,
        error: null,
        isLoading: false
    },
    reducers: {
        // Login
        loginRequest: state => {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.error = null;
            state.payload = payload
        },
        loginFail: (state, {payload}) => {
            state.isLoading = false;
            state.error = payload
        },
        // Logout
        logOutRequest: state => {
            state.isLoading = true;
            state.error = null;
        },
        logOutSuccess(state) {
            state.isLoading = false;
            state.error = null;
            state.payload = {}
        },
        logOutFail: (state, {payload}) => {
            state.isLoading = false;
            state.error = payload
        }
    }
})

export const {loginRequest, loginSuccess, loginFail , logOutRequest, logOutSuccess, logOutFail} = catSlice.actions;
export default catSlice.reducer;