import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    cartItems: [],
    totalPrice: 0
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
                state.cartItems = updatedItems
            }
            else {
                const newItem = { ...action.payload, amount: 1 }
                state.cartItems = [...state.cartItems, newItem]
            }
        },
        removeFromCart(state, action) {
            const { id } = action.payload
            state.cartItems = state.cartItems.filter(item => item.id !== id)
        },
        clearCart(state) {
            state.cartItems = []
        },
        increaseAmount(state, action) {
            const { id } = action.payload
            const item = state.cartItems.find(item => item.id === id)
            if (item) {
                item.amount++
            }
        },
        decreaseAmount(state, action) {
            const { id } = action.payload
            const item = state.cartItems.find(item => item.id === id)
            if (item && item.amount > 0) {
                item.amount--
            }
            if (item && item.amount === 0) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            }
        },
        total(state) {
            state.totalPrice = state.cartItems
        } 

    }
}
)




export const {
    addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, total
} = cartSlice.actions



export default cartSlice.reducer
