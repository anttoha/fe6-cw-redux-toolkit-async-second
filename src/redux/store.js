import { configureStore } from "@reduxjs/toolkit";
import deresSlice from "./slices/deresSlice";

const store = configureStore({
    reducer: {
        deres: deresSlice,
    },
});

export default store;