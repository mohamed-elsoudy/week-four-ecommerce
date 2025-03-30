import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    wishlistItems: [],
};
const wishlistSlice = createSlice({
    name: "wishlistSlice",
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            const product = action.payload;
            const exists = state.wishlistItems.find(item => item.id === product.id);
            if (!exists) {
                state.wishlistItems.push(product);
            }
        },
        removeFromWishList: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter(item => item.id !== action.payload);
        },
    }
});

export const { addToWishList , removeFromWishList } = wishlistSlice.actions;
export default wishlistSlice.reducer;