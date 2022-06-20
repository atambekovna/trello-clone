import React from 'react'
import TodoList from './TodoList';

const TodoMap = () => {
  const todos = useSelector((state) => state.todo.todos); 

  return (
    <div>
        {todos.map((el)=> (
            <TodoList/>
        ))}
    </div>
  )
}

export default TodoMap