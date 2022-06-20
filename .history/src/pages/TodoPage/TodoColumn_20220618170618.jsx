import cross from '../../assets/icons/close.png'
import { Button } from '../../components/UI/Button/Button'
import styled from 'styled-components'
import { Input } from '../../components/UI/Input/Input'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { authActions } from '../../store/slices/authSlice'

export const TodoColumn = (props) => {

    
    // const myRef = useRef()

    // useEffect(() => {
    //     myRef.current.focus()
    // }, [])

    return (
        <Cont>
        <Input type="text" placeholder='Enter list title'/>
        <div>
        <Button primary={true}>Add list</Button> <img src={cross} onClick={props.close}/>
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
        width: 100%;
        height: 35px;
    }
    & input:focus{
        outline: none !important;
    }
    & button{
        width: 200px;
        height: 40px;
        margin: 10px 10px 0 0;
    }
`