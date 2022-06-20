import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { removeTodo } from '../../store/slices/todoSlice'
import deleteIcon from '../../assets/icons/delete.png'
import { TaskCreater } from "./TaskCreater";

const TodoList = (props) => {
  const [isToggle, setIsToggle] = useState(true)
  const dispatch = useDispatch();

  const handleTodoDone = (e) => {
    dispatch(removeTodo(e.target.id));
  };

  return (
    <div>
        <Board id={props.id}>
          <p>{props.text} <img src={deleteIcon} id={props.id} onClick={handleTodoDone}/></p>
          {isToggle && <AddTod onClick={() => setIsToggle(false)}><div>+ Add another list</div></AddTod>}
          {!isToggle && <TaskCreater setIsToggle={setIsToggle}/>}
        </Board>
    
    </div>
  );
   
}

export default TodoList


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
    text-transform: capitalize;
  }
`
const AddTod = styled.div`
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