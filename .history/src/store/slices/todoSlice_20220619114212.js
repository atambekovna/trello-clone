import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
              id: Math.random().toString(),
              text: action.payload,
            };
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            state.count -= 1;
          },
    },
})

export const todoActions  = todoSlice.actions
export default todoSlice