import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Button } from '../../components/UI/Button/Button'
import cross from '../../assets/icons/close.png'
import { addTask } from '../../store/slices/todoSlice'

export const TaskCreater = (props) => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()

    const addTaskItem = () => {
      dispatch(addTask({
        text: task,
        columnId: 
      }))
    }

  return (
    <StyledTaskCreater>
        <StyledTextArea 
        placeholder='Enter a title for this card'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        />
        <div>
          <Button onClick={addTaskItem}>Add list</Button>
          <img onClick={()=> props.setIsToggle(true)} src={cross}/>
        </div>
    </StyledTaskCreater>
  )
}


const StyledTaskCreater = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 10px 10px;
  font-size: 18px;
  font-weight: 6000;
  border-radius: 5px;
  color: white;
  outline: none;
  & div {
    display: flex;
    align-items: center;
  }
  & button {
    width: 200px;
    height: 40px;
    margin: 10px 10px 0 0;
    background-color: #3131f2;
    color: white;
  }
`

const StyledTextArea = styled.textarea`
  background-color: white;
  width: 270px;
  border-radius: 3px;
  padding: 0 10px;
  font-size: 17px;
  font-weight: 300;
  color: black;
`