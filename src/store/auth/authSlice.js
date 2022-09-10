import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
        uid: null,
        email: null,
        emailVerified: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.emailVerified = payload.emailVerified;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.emailVerified = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
        doingAuthenticated: (state, {payload}) => {
            state.status = 'authenticated';
            state.errorMessage = payload?.errorMessage;
        },
        doneAuthenticated: (state) => {
            state.status = 'authenticated';
            state.errorMessage = 'not-error';
        },
        doingNotAuthenticated: (state, {payload}) => {
            state.status = 'not-authenticated';
            state.errorMessage = payload?.errorMessage;
        },
        doneNotAuthenticated: (state) => {
            state.status = 'not-authenticated';
            state.errorMessage = 'not-error';
        },
    },
})

export const {
    
    login,
    logout,
    checkingCredentials,
    doingAuthenticated,
    doneAuthenticated,
    doingNotAuthenticated,
    doneNotAuthenticated,

} = authSlice.actions;