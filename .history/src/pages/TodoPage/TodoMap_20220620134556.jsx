import React from 'react'

const TodoMap = () => {
  const todos = useSelector((state) => state.todo.todos); 

  return (
    <div>
        {todos}
    </div>
  )
}

export default TodoMap