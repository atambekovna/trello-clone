import React from 'react'

function List() {
  return (
    <div>List</div>
  )
}
<div>
{todos.map((todo) => (
  <TodoList
    key={todo.id}
    text={todo.text}
    id={todo.id}
    onCheck={handleAddTodo}
  />
))}
</div>
