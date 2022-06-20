import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
           state.todos.push({
            id: Math.random().toString(),
            text : action.payload,
            items:[]
           })
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        addTask: (state, action) => {
            
        }
    },
})

export const {  showBoard, addTodo, removeTodo } = todoSlice.actions;
export default todoSlice