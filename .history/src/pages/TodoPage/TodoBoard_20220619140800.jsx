import cross from '../../assets/icons/close.png'
import { Button } from '../../components/UI/Button/Button'
import styled from 'styled-components'
import { Input } from '../../components/UI/Input/Input'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store/slices/authSlice'
import { useSelector } from 'react-redux'
import { addTodo } from '../../store/slices/todoSlice'
import TodoList from './TodoList'

export const TodoBoard = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch();

//   const myRef = useRef();

//   useEffect(() => {
//     myRef.current.focus();
//   }, []);

const closeHandler =() => {
    dispatch(authActions.showColumn())
}

 const handleAddTodo = (e) => {
     e.preventDefault();
     dispatch(addTodo(text));
     
 };



  return (
    <>
      <Cont>
        <Input
          type="text"
          placeholder="Enter list title"
          autoFocus
          onChange={(e) => setText(e.target.value)}
          // ref={myRef}
        />
        <div>
          <Button primary={true} onClick={handleAddTodo}>
            Add list
          </Button>
          <img src={cross} onClick={closeHandler} />
        </div>
      </Cont>
      <TodoList/>

  
    </>
  );
};

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffffba;
  width: 300px;
  padding: 10px 10px;
  font-size: 18px;
  font-weight: 6000;
  border-radius: 5px;
  color: white;
  & div {
    display: flex;
    align-items: center;
  }
  & input {
    background-color: white;
    width: 270px;
    height: 35px;
  }
  & button {
    width: 200px;
    height: 40px;
    margin: 10px 10px 0 0;
  }
`;