import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [],
    isShowBoard: false,
    isShowList: false,
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        showBoard(state){
            state.isShowBoard = !state.isShowBoard
        },
        showList(state){
            state.isShowList = !state.isShowList
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

export const {  showBoard, showList, addTodo, removeTodo } = todoSlice.actions;
export default todoSlice