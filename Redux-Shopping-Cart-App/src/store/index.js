import { configureStore } from "@reduxjs/toolkit";
import authSlice from './auth-store'
import cartSlice from "./cart-store";
import uiSlice from "./ui-store";
const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
        cart:cartSlice.reducer,
        ui:uiSlice.reducer
    }
})

export default store