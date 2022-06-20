import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/UI/Button/Button'
import cross from '../../assets/icons/close.png'

export const TaskCreater = () => {
  return (
    <StyledTaskCreater>
        <StyledTextArea />
        <div>
          <Button>
            Add list
          </Button>
          <img src={cross}/>
        </div>
    </StyledTaskCreater>
  )
}


const StyledTaskCreater = styled.div`
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
`

const StyledTextArea = styled.textarea`
  height: 50px;
  width: 80%;
  background-color: #d0d7d533;
  border: 3px solid #acb0af5b;
  border-radius: 3px;
  padding: 0 10px;
  font-size: 17px;
  font-weight: 300;
  color: black;
`


const StyledAddButton = styled.button``

const StyledCloseCreaterButton = styled.button``
