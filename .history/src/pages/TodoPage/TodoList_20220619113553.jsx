import { useSelector } from "react-redux"

const taskList = useSelector(state => state.todo.tasks)

const TaskList = ( tasks ) => {
    
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