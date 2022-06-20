
import { useSelector } from "react-redux";
const TaskList = (props) => {
  const todos = useSelector((state) => state.todo.todos);

    const deleteTodo = () => {
        props.onCheck(props.id);
      };
      console.log(props.text);
      return (
        <div>
        {todos.map((todo) => (
          
            key={todo.id}
            text={todo.text}
            id={todo.id}
            onCheck={handleAddTodo}
          
        ))}
      </div>
      );
   
}

export default TaskList