import cross from '../../assets/icons/close.png'

export const TodoColumn = () => {
    return (
        <>
        <input type="text" />
        <Button>Add list <img src={cross}/></Button>
        </>
    )
}