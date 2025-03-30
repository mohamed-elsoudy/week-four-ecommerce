import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, thunkAPI) =>  {
    const {rejectWithValue} = thunkAPI;
    try {        
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
        
    } catch(error) {
        if(axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message || error.cause.message)
        } else {
            return rejectWithValue("Un Expected Error");
        }   
    }
})

export default fetchProducts;