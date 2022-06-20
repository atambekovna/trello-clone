import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [],
    isShowBoard: false,
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        showColumn(state){
            state.isShowBoard = !state.isShowColumn
        },
        addTodo: (state, action) => {
           state.todos.push({
            id: Math.random().toString(),
            text : action.payload
           })
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
})

export const {  showColumn, addTodo, removeTodo } = todoSlice.actions;
export default todoSlice