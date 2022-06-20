import Login from "../Login/Login"
import { TrelloIcon } from "../../assets/TrelloIcon/TrelloIcon"
import styled from "styled-components";

export const SignUp = () => {

    return (
      <>
        <SignUpStyled>
          <TrelloIcon />
           <Login />
        </SignUpStyled>
      </>
    );
}



const SignUpStyled = styled.div`
    width: 100%;
    height: 900px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`