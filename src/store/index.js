import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import productReducer from "./productSlice";


const store = configureStore({
    reducer: {
        auth: authSlice,
        cart: cartSlice,
        products: productReducer
    }
})

export default store