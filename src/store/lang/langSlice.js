import { createSlice } from '@reduxjs/toolkit';

export const langSlice = createSlice({
    name: 'lang',
    initialState: {
        lang: localStorage.getItem('langApp'),
        isLoading: false,
        errorMessage: null,
    },
    reducers: {
        startLoadingLang: (state) => {
            state.isLoading = true;
        },
        setLang: (state, action) => {
            state.isLoading = false;
            state.lang = action.payload;
        }
    },
})

export const { startLoadingLang, setLang } = langSlice.actions;