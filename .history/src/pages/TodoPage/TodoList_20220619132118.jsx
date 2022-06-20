
import { useSelector } from "react-redux";
import List from "./List";
const TaskList = (props) => {
  const todos = useSelector((state) => state.todo.todos);

    const deleteTodo = () => {
        props.onCheck(props.id);
      };      
      console.log(todos);        
      console.log(todos.text)
      return (
        <div>
        {todos.map((todo) => (
 
 <p>{props.text}</p>

          
        ))}
      </div>
      );
   
}

export default TaskList