import { createSlice } from "@reduxjs/toolkit";

const initialProductState = {
    products: []
}

const productSlice = createSlice({
    name: 'products',
    initialState: initialProductState,
    reducers: {
        getProducts(state, action) {

        },
        getProductDetails(state, action) {

        }
    }
})

export const {getProducts, getProductDetail} = productSlice.actions

export default productSlice.reducer