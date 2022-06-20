
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
 
 <List key={todo.id} text={todo.text}/>

          
        ))}
      </div>
      );
   
}

export default TaskList