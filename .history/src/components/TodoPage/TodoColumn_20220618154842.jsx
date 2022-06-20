import cross from '../../assets/icons/close.png'
import { Button } from '../UI/Button/Button'

export const TodoColumn = () => {
    return (
        <>
        <input type="text" />
        <Button>Add list <img src={cross}/></Button>
        </>
    )
}