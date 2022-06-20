import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [],
    isShowBoard: false,
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        showBoard(state){
            state.isShowBoard = !state.isShowBoard
        },
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
    },let newItem = 
})

export const {  showBoard, addTodo, removeTodo } = todoSlice.actions;
export default todoSlice