
import { useSelector } from "react-redux";
const TaskList = (props) => {
  const todos = useSelector((state) => state.todo.todos);

    const deleteTodo = () => {
        props.onCheck(props.id);
      }; 
      return (
        <div>
        {todos.map((todo) => (
 <div>
        <p>{todo.text}</p>

          
        ))}
      </div>
      );
   
}

export default TaskList