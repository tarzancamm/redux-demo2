import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

export const authActions = authSlice.actions; // components import this

export default authSlice.reducer // index.js imports this
