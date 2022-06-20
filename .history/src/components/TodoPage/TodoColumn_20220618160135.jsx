import cross from '../../assets/icons/close.png'
import { Button } from '../UI/Button/Button'

export const TodoColumn = () => {
    return (
        <Cont>
        <input type="text" />
        <Button primary={true}>Add list <img src={cross}/></Button>
        </>
    )
}