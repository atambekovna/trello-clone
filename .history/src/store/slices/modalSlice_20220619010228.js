const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
      setModalData(state, action) {
        state.boardId = payload.boardId,
        state.listId = payload.listId,
        state.task = payload.task,
      },
    },
  });
  
  export const modal = modalSlice.reducer;
  export const { setModalData } = modalSlice.actions;