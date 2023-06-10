import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "./slices/cartsSlices";
// carts :cartsReducer,
const store = configureStore({
   reducer: {
    carts: cartsReducer,
   }
})

export default store;