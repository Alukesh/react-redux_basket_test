import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cart from './cart';



const store = configureStore({
    reducer: {
        cart,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store