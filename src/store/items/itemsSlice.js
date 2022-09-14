import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        page: 0,
        items: [],
        isLoading: false,
    },
    reducers: {
        startLoadingItems: (state, /* action */) => {
            state.isLoading = true;
        },
        setItems: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.items = action.payload.items;
        }
    },
})

export const { startLoadingItems, setItems } = itemsSlice.actions;