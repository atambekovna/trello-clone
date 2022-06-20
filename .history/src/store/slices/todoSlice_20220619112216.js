const initialState = {
    tasks: []
}

const authSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        setTasks(state){
            state.tasks = [...state]
        },
    },
})