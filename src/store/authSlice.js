import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    userinfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    isLoggeddIn: false,
}

const productSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.isLoggeddIn = true
            localStorage.setItem('isLoggedIn', state.isLoggeddIn)
            state.userinfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))

        },
        logout(state, action) {
            state.userinfo = null
            state.isLoggeddIn = false
        }
    }
})

export const { getProducts, getProductDetail } = productSlice.actions

export default productSlice.reducer