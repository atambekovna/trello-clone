
import { useSelector } from "react-redux";
const TaskList = (props) => {
  const todos = useSelector((state) => state.todo.todos);

    const deleteTodo = () => {
        props.onCheck(props.id);
      };              
      console.log(todos.text)
      return (
        <div>
        {todos.map((todo) => (
          <div key={todo.id}>
 <p>{todo.text}</p>
          </div>
         
          
        ))}
      </div>
      );
   
}

export default TaskList