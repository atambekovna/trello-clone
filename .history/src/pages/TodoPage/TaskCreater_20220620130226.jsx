import React from 'react'
import styled from 'styled-components'

export const TaskCreater = () => {
  return (
    <StyledTaskCreater>
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
    </StyledTaskCreater>
  )
}


const StyledTaskCreater = styled.div``

const StyledTextArea = styled.textarea``

const StyledAddButton = styled.button``

const StyledCloseCreaterButton = styled.button``
