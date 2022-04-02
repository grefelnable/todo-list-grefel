import React from "react"
import "./Form.scss"

const Form = () => {
  return (
    <form>
      {/* todo input */}
      <input
        type="text"
        placeholder="Create a new todo... "
        className="textInput"
      ></input>
      {/* end of todo input */}
    </form>
  )
}

export default Form
