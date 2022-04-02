import React from "react"
import "./Form.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons"

const Form = ({ setInputText, inputText, todos, setTodos }) => {
  const inputTextHandler = e => {
    setInputText(e.target.value)
  }
  const saveInput = evt => {
    if (evt.key === "Enter") {
      evt.preventDefault()
      setTodos([...todos, { text: inputText, completed: false }])
      setInputText("")
    }

    console.log(todos)
  }
  return (
    <form>
      {/* todo input */}
      <input
        type="text"
        placeholder="Create a new todo... "
        className="textInput"
        onChange={inputTextHandler}
        value={inputText}
        onKeyPress={saveInput}
      ></input>
      <FontAwesomeIcon icon={faSquarePlus} className="input-icon" />
      {/* end of todo input */}
    </form>
  )
}

export default Form
