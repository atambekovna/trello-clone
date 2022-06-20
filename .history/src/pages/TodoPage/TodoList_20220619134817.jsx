import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from '../../store/slices/todoSlice'
import deleteIcon from '../../assets/icons/delete.png'

const TaskList = (props) => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <Board key={todo.id} id={todo.id} onClick={handleTodoDone}>
          <p>{todo.text}</p>
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
  padding: 10px 10px;
  font-size: 18px;
  font-weight: 6000;
  border-radius: 5px;
  color: black;
  font-weight: bold;
`