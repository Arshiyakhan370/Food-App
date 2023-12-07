import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import SearchSlice from "./SearchSlice";

const store=configureStore({
    reducer:{
        cartSliceReducer:CartSlice,
        seachReducer:SearchSlice
    }
})
export default store;