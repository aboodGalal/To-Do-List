import React, { useState } from 'react'
import shortid from 'shortid'

function Form(props) {
  const [text,setText] = useState("")
  const handleSubmit = (e) =>{
    // e.preventDefault()
    props.onsubmit({
      id: shortid.generate(),
      text: text,
      complete: false,
    })
    setText("")
  }

  return (
    <div className="input-group mb-3" >
        <input onChange={(e) => setText(e.target.value)} value={text} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button onClick={() =>handleSubmit()} className="ms-2 rounded btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
    </div>
  )
}

export default Form
