const initialState = {
    tasks: []
}

const todoSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        setTasks(state){
            state.tasks = [...state, {title: tasks, id:Math.random().toString()}]
        },
    },
})

export const todoActions  = todoSlice.actions
export default todoSlice