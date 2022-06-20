import styled from "styled-components"

export const Input = (props) => {
    return <InputStyled 
    type={props.type} 
    value={props.value}
    placeholder={props.placeholder}
    onChange={props.onChange}
    // autoFocus
    />
}

const InputStyled = styled.input`
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

