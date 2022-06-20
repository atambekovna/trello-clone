import { Button } from "../UI/Button/Button"
import { Input } from "../UI/Input/Input"
import googleloIcon from '../../assets/google.png'
import microsoftIcon from '../../assets/microsoft.png'
import appleIcon from '../../assets/apple.png'
import styled from "styled-components"
import { useState } from "react"
import { useDispatch } from "react-redux"
import authActions
import { validEmail, validPassword } from '../../Regex/Regex';
import { Link, useHistory } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; 

const Login = () => {
  const dispatch = useDispatch()
  const {push} = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const handleLogin = (email, password) => {
    // e.preventDefault();
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(authAction.setUser({}))
    })
    .catch(console.log())
    
    // if(!validEmail.test(email)){
    //   setEmailErr(true)
    // }
    // if(!validPassword.test(password)){
    //   setPwdError(true)
    // }
  };

  return (
    <Layout>
      <h3>Вход в Trello</h3>
      {emailErr && (
        <Error>
          <p>Your email is invalid!</p>
        </Error>
      )}
      <Input
        type="text"
        placeholder="Укажите адрес электронной почты"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      {pwdError && (
        <Error>
          <p>Your password is invalid</p>
        </Error>
      )}
      <Input
        type="password"
        placeholder="Введите пароль"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Link to="/login/todo">
        <Button primary={true} onClick={handleLogin}>
          Войти
        </Button>
      </Link>

      <span>ИЛИ</span>
      <Card>
        <img src={googleloIcon} alt="google-icon" />
        <h3>Войти через Google</h3>
      </Card>
      <Card>
        <img src={microsoftIcon} alt="microsoft-icon" />
        <h3>Войти через Microsoft</h3>
      </Card>
      <Card>
        <img src={appleIcon} alt="apple-icon" />
        <h3>Войти через Apple</h3>
      </Card>
      <div>
        <a href="#">Не удается войти?</a>
        <span> ● </span>
        <a href="#">Зарегистрировать аккаунт</a>
      </div>
    </Layout>
  );
};

export default Login


const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  border: 3px solid #acb0af5b;
  border-radius: 3px;
  padding: 0 10px;
  box-shadow: 1px 2px 8px 0px rgba(34, 60, 80, 0.2);
  & img{
    width: 30px;
  }
  &:hover{
    background-color: #cecdcd66;
  }
`
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 600px;
  width: 400px;
  border-radius: 10px;
  background-color: white;
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 40px rgba(2,2,2,0.2);
  padding: 10px 35px 25px;
  & a{
    text-decoration: none;
    font-size: 18px;
  }
  & button{
    width: 400px;
  }
  `
const Error = styled.div`
  width: 200px;
  height: 30px;
  background: #f91d1dc5;
  border-radius: 5px;
  border: 3px solid #ac0202ed;
  text-align: center;
`