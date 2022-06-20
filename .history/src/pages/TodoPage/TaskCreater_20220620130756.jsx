import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/UI/Button/Button'
import cross from '../../assets/icons/close.png'

export const TaskCreater = () => {
  return (
    <StyledTaskCreater>
        <StyledTextArea
          type="text"
          placeholder="Enter list title"
          // ref={myRef}
        />
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
`

const StyledTextArea = styled.textarea`
  height: 50px;
  width: 100%;
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
