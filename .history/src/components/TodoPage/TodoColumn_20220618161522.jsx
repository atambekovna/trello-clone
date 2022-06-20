import cross from '../../assets/icons/close.png'
import { Button } from '../UI/Button/Button'
import styled from 'styled-components'
import { Input } from '../UI/Input/Input'
import { useEffect, useRef } from 'react'

export const TodoColumn = () => {
    // const myRef = useRef()

    // useEffect(() => {
    //     myRef.current.focus()
    // }, [])

    return (
        <Cont>
        <Input type="text" />
        <div>
        <Button primary={true}>Add list</Button> <img src={cross}/>
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
    & button{
        width: 200px;
        height: 40px;
        mar
    }
`