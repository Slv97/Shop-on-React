import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "./cart/reducer";

export const store = configureStore({
    reducer: {
        cart: cardReducer,
    },
});
