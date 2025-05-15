import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    text: string | null;
    showDot: boolean;
};
const initialState: InitialState = {
    text: null,
    showDot: true,
};

// Create the slice with reducers for individual property changes
const floatingText = createSlice({
    name: "floating-dot",
    initialState,
    reducers: {
        setFloatingText(state, action: { payload: string | null }) {
            state.text = action.payload;
        },
        toggleShowFloatingDot(state, action: { payload: boolean }) {
            state.showDot = action.payload;
        }
    },
});

export const { setFloatingText, toggleShowFloatingDot } = floatingText.actions;

export default floatingText;
