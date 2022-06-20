import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from '../../store/slices/todoSlice'
import deleteIcon from '../../assets/icons/delete.png'
import plus from '../../assets/icons/plus.png'
import { authActions } from '../../store/slices/authSlice'

const TaskList = (props) => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const column = useSelector(state => state.auth.isShowColumn)

    const addColumn = () => {
        dispatch(authActions.showColumn())
    }

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <Board key={todo.id} id={todo.id} onClick={handleTodoDone}>
          <p>{todo.text}</p>
          <AddTodo onClick={addColumn}><div><img src={plus}/>Add another cart</div></AddTodo>
          {/* <img src={deleteIcon} /> */}
        </Board>
      ))}
    </div>
  );
   
}

export default TaskList

const Board = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffffba;
  width: 300px;
  padding: 10px 0 10px ;
  font-size: 18px;
  font-weight: 6000;
  border-radius: 5px;
  color: black;
  font-weight: bold;
`
const AddTodo = styled.div`
    width: 300px;
    padding: 10px 10px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    background-color: #d6d6d60;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: start;
    & div{
        display: flex;
        align-items: center;
    }
`