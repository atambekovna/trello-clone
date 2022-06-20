const boardsSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {
      addBoard: (
        state: boardsState,
        { payload }: PayloadAction<addBoardAction>
      ) => {
        state.boardArray.push(payload.board);
      },
  
      addList: (
        state: boardsState,
        { payload }: PayloadAction<addListAction>
      ) => {
        state.boardArray.map(board =>
          board.boardId === payload.boardId
            ? { ...board, lists: board.lists.push(payload.list) }
            : board
        );
      },
  
      addTask: (
        state: boardsState,
        { payload }: PayloadAction<addTaskAction>
      ) => {
        state.boardArray.map(board =>
          board.boardId === payload.boardId
            ? {
                ...board,
                lists: board.lists.map(list =>
                  list.listId === payload.listId
                    ? { ...list, tasks: list.tasks.push(payload.task) }
                    : list
                ),
              }
            : board
        );
      },