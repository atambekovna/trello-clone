import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import todoSlice from "./slices/todoSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        todo: todoSlice
    }
})

export default store