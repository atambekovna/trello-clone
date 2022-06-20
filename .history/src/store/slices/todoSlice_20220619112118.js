const initialState = {
    tasks: []
}

const authSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        setUser(state, action){
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
        },
    },
})