const initialState = {
    tasks: []
}

const authSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        setTasks(state){
            state.tasks = [...state, {title: tasks, id:Math.random().toString()}]
        },
    },
})

export const authActions  = authSlice.actions
export default authSlice