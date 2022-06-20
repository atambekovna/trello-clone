import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from '../../store/slices/todoSlice'
import deleteIcon from '../../assets/icons/delete.png'
import { showColumn } from '../../store/slices/todoSlice'

const TaskList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const list = useSelector(state => state.todo.isShowColumn)

    const addColumn = () => {
        dispatch(showColumn())
    }

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    {list}
    <div>
      {todos.map((todo) => (
        <Board key={todo.id} id={todo.id} >
          <p>{todo.text} <img src={deleteIcon} onClick={handleTodoDone}/></p>
          <AddTodo onClick={addColumn}><div>+ Add another list</div></AddTodo>
        </Board>
      ))}
    </div>
  );
   
}

export default TaskList

const Board = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #dad9d9e8;
  width: 300px;
  padding: 10px 10px;
  font-size: 18px;
  font-weight: 6000;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  & p{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const AddTodo = styled.div`
    width: 280px;
    padding: 10px 10px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    /* background-color: #d6d6d60; */
    color: #474747;
    cursor: pointer;
    display: flex;
    justify-content: start;
    & div{
        display: flex;
        align-items: center;
    }
    &:hover{
      background-color: #bababae8
    }
`