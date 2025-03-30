import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const foundedItem = state.find((product) => product.id === action.payload.id)
            if(foundedItem) {
                foundedItem.quantity += 1;
            } else {
                state.push({...action.payload, quantity: 1});
            } 
        },
        increaseQuantity: (state, action) => {
            const foundedItem = state.find((product) => product.id === action.payload.id)
            if(foundedItem) {
                foundedItem.quantity += 1;
            }
        },
        dicreaseQuantity: (state, action) => {
            const foundedItem = state.find((product) => product.id === action.payload.id)
            if(foundedItem && foundedItem.quantity > 1) {
                foundedItem.quantity -= 1;
            }
        }
    }
});

export const {addToCart, increaseQuantity, dicreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;