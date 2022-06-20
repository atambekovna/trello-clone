import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/UI/Button/Button'
import cross from '../../assets/icons/close.png'

export const TaskCreater = (props) => {
  return (
    <StyledTaskCreater>
        <StyledTextArea />
        <div>
          <Button>Add list</Button>
          <img onClick={()} src={cross}/>
        </div>
    </StyledTaskCreater>
  )
}


const StyledTaskCreater = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #dad9d9e8;
  width: 280px;
  padding: 10px 10px;
  font-size: 18px;
  font-weight: 6000;
  border-radius: 5px;
  color: white;
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