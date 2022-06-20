import styled, { css } from "styled-components";

export const Button = (props) => {
  return <ButtonStyled 
  onClick={props.onClick}
  disabled={props.disabled}
  primary={props.primary}
  >
    {props.children}
  </ButtonStyled>;
};

const ButtonStyled = styled.button`
  width: 100%;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:disabled,
  &:focus:disabled,
  &:hover:disabled,
  &:active:disabled{
    background: #ccc;
    border-color: #ccc;
    color: #666666;
    cursor: not-allowed;
  }
  ${(props) =>
    props.primary &&
    css`
      /* width: 350px; */
      color: #fff;
      background-color: #0000ffbc;
      
    `}
`;
