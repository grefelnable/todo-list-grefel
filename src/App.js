import React, { useState } from "react"
import "./App.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons"
//importing components
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className="container">
      <div className="img-container">
        <img src="../assets/office.jpg" alt="laptop on the desk" />
      </div>
      {/* header title */}
      <header className="header">
        <h1 className="header__title">TODO </h1>
        <FontAwesomeIcon icon={faClipboardCheck} className="header__icon" />
      </header>
      {/* end of header title */}
      <section className="section-center">
        <Form
          setInputText={setInputText}
          inputText={inputText}
          setTodos={setTodos}
          todos={todos}
        />
        <TodoList />
      </section>
    </div>
  )
}

export default App
