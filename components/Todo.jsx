import React from 'react'

function Todo(props) {
  return (
    <>
        <div key={props.todo.id} className='d-flex flex-row justify-content-evenly mt-2 mb-2'>
          <h2 style={{textDecoration: props.todo.complete ? "line-through" : "", cursor: "pointer"}} onClick={props.toggle}>{props.todo.text}</h2>
          <button onClick={props.onDelete} className='btn btn-danger rounded'>X</button>
        </div>
    </>
  )
}


export default Todo