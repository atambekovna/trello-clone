import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasks: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
              id: Math.random().to,
              text: action.payload,
            };
        }
    },
})

export const todoActions  = todoSlice.actions
export default todoSlice