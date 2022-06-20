import React from 'react'
import TodoList from './TodoList';

const TodoMap = () => {
  const todos = useSelector((state) => state.todo.todos); 

  return (
    <div>
        {todos.map((el)=> (
            <TodoList key={el.id} id={el.id} />
        ))}
    </div>
  )
}

export default TodoMap