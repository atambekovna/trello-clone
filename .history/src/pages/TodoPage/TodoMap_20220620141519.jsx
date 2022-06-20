import React from 'react'
import TodoList from './TodoList';
import { useSelector } from 'react-redux';
const TodoMap = () => {
  const todos = useSelector((state) => state.todo.todos); 

  return (
    <div>
        {todos.map((el)=> (
            <TodoList key={el.id} id={el.id} text={el.text} />
        ))}
         console.log(todos)
    </div>
  )
}

export default TodoMap