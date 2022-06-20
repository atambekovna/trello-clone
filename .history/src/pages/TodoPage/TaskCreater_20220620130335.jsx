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
          <Button primary={true} onClick={handleAddTodo}>
            Add list
          </Button>
          <img src={cross} onClick={()=> props.setIsToggle(true)} />
        </div>
    </StyledTaskCreater>
  )
}


const StyledTaskCreater = styled.div``

const StyledTextArea = styled.textarea``

const StyledAddButton = styled.button``

const StyledCloseCreaterButton = styled.button``
