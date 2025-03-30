import { configureStore } from "@reduxjs/toolkit";
import products from './products/productsSlice';
import allProductsSlice from "./explore-our-products/allProductsSlice";
import cartSlice from "./explore-our-products/cartSlice";
import authSlice from "./explore-our-products/auth";
import wishlist from "./explore-our-products/wishlistSlice";

const store = configureStore({
    reducer: {
        products: products,
        allProductsSlice: allProductsSlice,
        cartSlice: cartSlice,
        authSlice: authSlice,
        wishlist: wishlist,
    }
})
export default store;