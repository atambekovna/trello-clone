import cross from '../../assets/icons/close.png'
import { Button } from '../UI/Button/Button'
import styled from 'styled-components'
import { Input } from '../UI/Input/Input'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { authActions } from '../../store/slices/authSlice'

export const TodoColumn = () => {
    const column = useSelector(state => state.auth.isShowColumn)
    const dispatch = useDispatch()

    const closeColumn = () => {
      dispatch(authActions.closeColumn())
    }
    // const myRef = useRef()

    // useEffect(() => {
    //     myRef.current.focus()
    // }, [])

    return (
        <Cont>
        <Input type="text" />
        <div>
        <Button primary={true}>Add list</Button> <img src={cross} onClick={closeColumn}/>
        </div>
        </Cont>
    )
}

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    & input{
        background-color: white;
        width: 2500px;
        height: 35px;
    }
    & input:focus{
        outline: none !important
    }
    & button{
        width: 200px;
        height: 40px;
        margin: 10px 10px 0 0;
    }
`