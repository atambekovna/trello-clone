import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
           state.
            //   id: Math.random().toString(),
            //   text: action.payload,
           
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
          },
    },
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice