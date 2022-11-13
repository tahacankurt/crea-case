import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        payload: {},
        error: null,
        isLoading: null
    },
    reducers: {
        loginRequest: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.payload = action.payload
        },
        loginFail: (state, action) => {
            state.isLoading = false;
            state.error = action.error
        }
    }
})

export const {loginRequest, loginSuccess, loginFail} = authSlice.actions;
export default authSlice.reducer;