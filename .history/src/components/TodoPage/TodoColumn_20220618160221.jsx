import cross from '../../assets/icons/close.png'
import { Button } from '../UI/Button/Button'
import styled from 'styled-components'

export const TodoColumn = () => {
    return (
        <Cont>
        <input type="text" />
        <Button primary={true}>Add list <img src={cross}/></Button>
        </Cont>
    )
}

const Cont 