import { createSlice } from "@reduxjs/toolkit";
import fetchProducts from "./thunk/fetchProducts";

const allProductsSlice = createSlice({
    name: "allProductsSlice",
    initialState: [
        {
            imgSrc: "/imgs/joystake (4).png",
            title: "HAVIT HV-G92 Gamepad",
            price: 120,
            rate: 88, 
            isNew: false,
            circleColor: false,
            id: 200,
            rating: {
                count: 200
            }
        },
    ],
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});
export {fetchProducts};
// export const {} = allProductsSlice.actions;
export default allProductsSlice.reducer;