import cross from '../../assets/icons/close.png'
import { Button } from '../UI/Button/Button'
import styled from 'styled-components'
import { Input } from '../UI/Input/Input'

export const TodoColumn = () => {
    return (
        <Cont>
        <Input type="text" />
        <Button primary={true}>Add list <img src={cross}/></Button>
        </Cont>
    )
}

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    & inpu
`