import React from 'react'

function List(props) {
    console.log(props.text);
  return (
    <div>
        <p>{props.text}</p>
        
    </div>
  )
}
export default List
