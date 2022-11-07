import { createSlice } from '@reduxjs/toolkit';

export const bagSlice = createSlice({
    name: 'bag',
    initialState: {
        items: [],
        isSaving: false,
        savedMessage: null,
    },
    reducers: {
        savingBagItems: (state) => {
            state.isSaving = true;
        },
        addBagItems: (state, action) => {
            state.items.push( action.payload );
            state.isSaving = false;
        },
        setBagItems: (state, action) => {
            state.isSaving = false;
            state.items = action.payload;
        },
        onLogoutClearBagItems: (state) => {
            state.isSaving = false;
            state.savedMessage = null;
            state.items = [];
        },
        deleteBagItemsById: (state, action) => {
            state.isSaving = false;
            state.items = state.items.filter( item => item.id !== action.payload );
            
        },
    },
})

export const { savingBagItems, addBagItems, setBagItems, deleteBagItemsById, onLogoutClearBagItems } = bagSlice.actions;