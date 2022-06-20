

const TaskList = (props) => {
  const todos = useSelector((state) => state.todo.todos);

    const deleteTodo = () => {
        props.onCheck(props.id);
      };
      console.log(props.text);
      return (
        <div className="todo" onClick={deleteTodo}>
          <p>{props.text}</p>
        </div>
      );
   
}

export default TaskList