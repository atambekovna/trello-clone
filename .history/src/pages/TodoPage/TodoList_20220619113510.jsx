import { useSelector } from "react-redux"

const tasks = useSelector(state => state.todo.tast)

const TaskList = ({ tasks }) => {
    
    return (
        <>
        {tasks.map((item) => {
                return (
                    <div>
                        <ul>
                            <li key={item.id}>
                                {item.title}
                            </li>
                        </ul>
                    </div>
                )
            })}
        </>
    )
}

export default TaskList