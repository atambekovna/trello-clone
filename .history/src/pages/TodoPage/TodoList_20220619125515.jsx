

const TaskList = (props) => {
    const deleteTodo = () => {
        props.onCheck(props.id);
      };
console.log(props);
      return (
        <div className="todo" onClick={deleteTodo}>
          <p>{props.text}</p>
        </div>
      );
   
}

export default TaskList