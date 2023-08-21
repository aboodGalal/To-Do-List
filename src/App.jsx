import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "../components/Form";
import Todo from "../components/Todo";

function App() {
  let [todo, setTodo] = useState([]);
  const [showTodo, setShowTodo] = useState("all")
  const [toggleAllComplete, setToggleAllComplet] = useState(true)
  const addTodos = (obj) =>{
    setTodo([obj, ...todo])
  }

  const handleDelete = (id) =>{
    setTodo(todo.filter((tod) => tod.id !== id))
  }

  const kind = (s) =>{
    setShowTodo(s)
  }

  if(showTodo === "active"){
    todo = todo.filter((td) => !td.complete)
  }else if(showTodo === "complete"){
    todo = todo.filter((td) => td.complete)
  }

  const toggle = (id) =>{
    setTodo(todo.map((td) => {
      if(td.id === id){
        return{
          ...td,
          complete: !td.complete
        }
      }else{
        return td
      }
    }))
  }

  const removeComplete = () =>{
    setTodo(todo.filter((td) => !td.complete))
  }

  const makeAllFalse = () =>{
    setTodo(todo.map((td) => {
      return{
        ...td,
        complete: !td.complete,
      }
    }))
    setToggleAllComplet(!toggleAllComplete)
  }

  return (
    <>
      <h1 className="bold mb-5">Handle Your Tasks</h1>
      <Form onsubmit={addTodos}/>
      {todo.map((tod) => (<Todo key={tod.id} todo={tod} onDelete={() => handleDelete(tod.id)}
      toggle={() =>toggle(tod.id)}/>))}
      <div className="d-flex justify-content-center align-items-centet gap-2 ">
        <button className='btn rounded btn-primary' style={{width: "35%"}} onClick={() => kind("all")}>All</button>
        <button className='btn rounded btn-primary' style={{width: "35%"}} onClick={() => kind("active")}>Active</button>
        <button className='btn rounded btn-primary' style={{width: "35%"}} onClick={() => kind("complete")}>Complete</button>
      </div>
      <div className="d-flex flex-column mt-2">
        <button className="btn rounded btn-warning" onClick={() => removeComplete()}>Remove All Complete Tasks</button>
        <button className="btn rounded btn-warning mt-2" onClick={() => makeAllFalse()}>Toggle All Comlete : {`${toggleAllComplete}`}</button>
      </div>
    </>
  );
}

export default App;
