import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsInCart: [],
        itemsInCartWithAttributes: [],
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload);
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(
                (product) => (product.id !== action.payload)
            );
        },
        setItemInCartWithAttributes: (state, action) => {
            state.itemsInCartWithAttributes.push(action.payload);
        },
    },
});

export const { setItemInCart, deleteItemFromCart, setItemInCartWithAttributes } = cartSlice.actions;
export default cartSlice.reducer;
