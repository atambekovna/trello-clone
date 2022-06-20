import React from 'react'
import styled from 'styled-components'

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


const StyledTaskCreater = styled.div``

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
