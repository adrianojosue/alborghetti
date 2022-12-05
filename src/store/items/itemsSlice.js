import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        isLoading: false,
        errorMessage: null,
    },
    reducers: {
        startLoadingItems: (state) => {
            state.isLoading = true;
        },
        setItems: (state, action) => {
            state.isLoading = false;
            state.items = action.payload;
        },
        onLogoutClearItems: (state) => {
            state.isLoading = false;
            state.items = [];
        },
    },
})

export const { startLoadingItems, setItems, onLogoutClearItems } = itemsSlice.actions;