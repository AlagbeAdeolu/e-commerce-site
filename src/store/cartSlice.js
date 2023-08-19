import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id)
            if (existingItem) {
                const updatedItems = state.cartItems.map(item =>
                    item.id === action.payload.id
                        ? { ...item, amount: item.amount + action.payload.amount }
                        : item
                );
                state.cartItems = updatedItems
            } else {
                state.cartItems = [...state.cartItems, action.payload]
            }

        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
        },
        clearCart(state) {
            state.cartItems = []
        },
        resetCart(state) {
            state = initialCartState
        }


    }
})

export const {
    addToCart, removeFromCart, clearCart, resetCart
} = cartSlice.actions


export default cartSlice.reducer
