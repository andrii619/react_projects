

import {createSlice} from "@reduxjs/toolkit";




const initialAuthState = {authenticated: false};

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.authenticated = true;
            console.log(action?.payload?.email, action?.payload?.password);
            console.log(action);
        },
        logout(state) {
            state.authenticated = false;
        }
    }
});




export const authActions = authSlice.actions;
export default authSlice.reducer;






