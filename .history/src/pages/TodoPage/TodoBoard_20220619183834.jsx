import cross from '../../assets/icons/close.png'
import { Button } from '../../components/UI/Button/Button'
import styled from 'styled-components'
import { Input } from '../../components/UI/Input/Input'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { showColumn } from '../../store/slices/todoSlice'
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
    dispatch(showColumn())
}

 const handleAddTodo = (e) => {
     e.preventDefault();
     if(text !== ''){
     dispatch(addTodo(text));
     }
 };



  return (
    <>
    <TodoList/>
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
    </>
  );
};

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #dad9d9e8;
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
    text-transform: ;
  }
  & button {
    width: 200px;
    height: 40px;
    margin: 10px 10px 0 0;
  }
`;