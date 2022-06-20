import { useSelector } from "react-redux"

const taskList = useSelector(state => state.todo.tasks)

const TaskList = () => {
    const deleteTodo = () => {
        props.onCheck(props.id);
      };
      return (
        <div className="todo" onClick={deleteTodo}>
          <input type="checkbox"></input>
          <label>{props.text}</label>
        </div>
      );
   
}

export default TaskList