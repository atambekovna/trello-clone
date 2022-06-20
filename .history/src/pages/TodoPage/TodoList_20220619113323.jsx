const 

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