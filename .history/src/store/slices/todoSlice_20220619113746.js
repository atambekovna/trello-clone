import create

const initialState = {
    tasks: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTasks(state){
            state.tasks = [...state, {title: tasks, id:Math.random().toString()}]
        },
    },
})

export const todoActions  = todoSlice.actions
export default todoSlice