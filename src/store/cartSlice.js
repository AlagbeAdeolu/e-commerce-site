import { createSlice } from "react";

const initialCartState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id)
            let updatedItems
            if (existingItem) {
                const updatedItem = [
                    ...existingItem,
                    amount: existingItem.amount + action.payload.amount,
                ]
                updatedItems= [...state.item, updatedItem]
            } else {
                state.cartItems = [...state.cartItem, action.payload.id]
            }
            return {
                cartItems: updatedItems
            }
        },
        removeFromCart(state) {

        },
        clearCart(state) {

        },
        resetCart(state) {

        }


    }
})
