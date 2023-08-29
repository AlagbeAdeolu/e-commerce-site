import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addToCart(state, action) {
            const { id } = action.payload
            const existingCartItem = state.cartItems.find(item => item.id === id)
            if (existingCartItem) {
                const updatedItems = state.cartItems.map(item =>
                    item.id === id
                        ? { ...item, amount: item.amount + 1 }
                        : item)
                state.cartItems= updatedItems
            }
            else {
                const newItem = { ...action.payload, amount: 1 }
                state.cartItems = [...state.cartItems, newItem]
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
}
)




export const {
    addToCart, removeFromCart, clearCart, resetCart
} = cartSlice.actions


export default cartSlice.reducer
