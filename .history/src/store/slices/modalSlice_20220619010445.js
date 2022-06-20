const initialState = {
    boardId: "board-0",
    listId: "list-0",
    task: {
      taskId: "task-0",
      taskName: "task 0",
      taskDescription: "description",
    },
  };

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
      setModalData(state, action) {
        state.boardId = action.payload.boardId,
        state.listId = action.payload.listId,
        state.task = action.payload.task,
      },
    },
  });
  
  export const modal = modalSlice.reducer;
  export const { setModalData } = modalSlice.actions;