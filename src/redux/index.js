import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "./cart/reducer";
import aboutProductReducer from "./aboutProduct/reducer";

export const store = configureStore({
    reducer: {
        cart: cardReducer,
        aboutProduct: aboutProductReducer,
    },
});
