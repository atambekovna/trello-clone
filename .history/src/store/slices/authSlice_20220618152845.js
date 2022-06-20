import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    token: null,
    id: null,
    showColumn: false,
}



const authSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser(state, action){
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
        }
    },
})

export const authActions  = authSlice.actions
export default authSlice