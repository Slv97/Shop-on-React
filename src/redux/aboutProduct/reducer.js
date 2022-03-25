import { createSlice } from "@reduxjs/toolkit";

const aboutProductSlice = createSlice({
    name: "aboutProduct",
    initialState: {
        currentAboutProduct: null
    },
    reducers: {
        setCurrentAboutProduct: (state, action) => {
            state.currentAboutProduct = action.payload
        },
    },
});

export const { setCurrentAboutProduct } = aboutProductSlice.actions;
export default aboutProductSlice.reducer;
