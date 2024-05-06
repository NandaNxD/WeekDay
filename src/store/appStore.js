import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import appSlice from "./appSlice";

const appStore=configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        [appSlice.reducerPath]:appSlice.reducer,
        
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})

export default appStore