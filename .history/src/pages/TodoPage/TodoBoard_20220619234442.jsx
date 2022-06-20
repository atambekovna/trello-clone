import cross from '../../assets/icons/close.png'
import { Button } from '../../components/UI/Button/Button'
import styled from 'styled-components'
import { Input } from '../../components/UI/Input/Input'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { showBoard } from '../../store/slices/todoSlice'
import { addTodo } from '../../store/slices/todoSlice'

export const TodoBoard = (props) => {
  const [text, setText] = useState('')
  const dispatch = useDispatch();

//   const myRef = useRef();

//   useEffect(() => {
//     myRef.current.focus();
//   }, []);

const closeHandler =() => {
    dispatch(showBoard())
}

 const handleAddTodo = (e) => {
     e.preventDefault();
     if(text !== ''){
     dispatch(addTodo(text));
     }
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
          <img src={cross} onClick={()=> props.setIsToggle(true)} />
        </div>
      </Cont>
      {isToggle && <AddTodo onClick={()=> setIsToggle(false)}><div>+ Add another list</div></AddTodo>}
          {!isToggle && <TodoBoard setIsToggle={setIsToggle}/>}
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
    text-transform: capitalize;
  }
  & button {
    width: 200px;
    height: 40px;
    margin: 10px 10px 0 0;
  }
`;