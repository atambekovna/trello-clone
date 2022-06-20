import { useDispatch, useSelector } from 'react-redux/es/exports'
import down from '../../assets/icons/down.png'
import { Button } from "../../components/UI/Button/Button"
import styled from 'styled-components'
import { Input } from '../../components/UI/Input/Input'
import logo from '../../assets/trello-logo.png'
import plus from '../../assets/icons/plus.png'
import menu from '../../assets/icons/burger-menu.png'
import search from '../../assets/icons/search.png'
import exclamation from '../../assets/icons/exclamation.png'
import bell from '../../assets/icons/bell.png'
import backImg from '../../assets/car.jpg'
import useAuth from '../../hooks/useAuth'
import { Redirect } from 'react-router-dom'
import { authActions } from '../../store/slices/authSlice'
import { TodoColumn } from './TodoColumn'

export const TodoPage = () => {

    // const {isAuth} = useAuth()
    const column = useSelector(state => state.auth.isShowColumn)
    console.log(column);
    const dispatch = useDispatch()

    const addColumn = () => {
        dispatch(authActions.showColumn())
    }
    // const closeColumn = () => {
    //   dispatch(authActions.closeColumn())
    // }

    return (
      <>
        <TodoHeader>
          <BtnBlock>
            <img src={menu} />
            <Logo src={logo} />
            <Button>Workspaces<img src={down} /></Button>
            <Button>Recent<img src={down} /></Button>
            <Button>Favorites<img src={down} /></Button>
            <Button>Templates<img src={down} /></Button>
          </BtnBlock>
          <SearchBlock>
            <img src={search} className="search" />
            <Input placeholder="Search" />
            <img src={exclamation} />
            <img src={bell} />
          </SearchBlock>
        </TodoHeader>
        <Main>
          {column && <TodoColumn/> || <AddTodo onClick={addColumn}><div><img src={plus}/>Add another list</div></AddTodo>}
        </Main>
      </>
    ); 
}

const TodoHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background-color: #031439c5;
    padding: 0 10px 0 10px;
    & button{
        background-color: #062aa110;
        color: #ffffff;
    }
    & input{
        width: 300px;
        height: 35px;
        padding-left: 40px;
        color: white;
    }
    & input::-webkit-input-placeholder { color: #ffffffe4; }
`
const BtnBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 700px;
`

const Main = styled.div`
  background-image: url(${backImg});
  background-repeat: no-repeat;
  background-size: cover;
  p
  width: 100%;
  height: 900px;
`
const Logo = styled.img`
    height: 28px;
    margin-left: 10px;
`
const SearchBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 450px;
`
const AddTodo = styled.div`
    width: 300px;
    padding: 10px 10px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    background-color: #d6d6d693;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: start;
    & div{
        display: flex;
        align-items: center;
    }
`