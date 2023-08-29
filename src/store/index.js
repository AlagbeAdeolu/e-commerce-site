import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import productReducer from "./productSlice";
import sidebarReducer from "./sidebarSlice"


const store = configureStore({
    reducer: {
        auth: authSlice,
        cart: cartSlice,
        products: productReducer,
        sidebar: sidebarReducer
    }
})

export default store