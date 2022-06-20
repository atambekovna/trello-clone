
import { useSelector } from "react-redux";
import List from "./List";
const TaskList = (props) => {
  const todos = useSelector((state) => state.todo.todos);

    const deleteTodo = () => {
        props.onCheck(props.id);
      }; 
      return (
        <div>
        {todos.map((todo) => (
 
 <p>{todo.text}</p>

          
        ))}
      </div>
      );
   
}

export default TaskList