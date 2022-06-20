import cross from '../../assets/icons/close.png'
import { Button } from '../UI/Button/Button'
import styled from 'styled-components'
import { Input } from '../UI/Input/Input'

export const TodoColumn = () => {
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
    justify-content: ;
    & input{
        background-color: white;
        height: 30px;
    }
`