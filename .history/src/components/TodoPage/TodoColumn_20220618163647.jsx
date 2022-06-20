import cross from '../../assets/icons/close.png'
import { Button } from '../UI/Button/Button'
import styled from 'styled-components'
import { Input } from '../UI/Input/Input'
import { useEffect, useRef } from 'react'

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
        <Button primary={true}>Add list</Button> <img src={cross} onClick={}/>
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
        outline: none !important
    }
    & button{
        width: 200px;
        height: 40px;
        margin: 10px 10px 0 0;
    }
`