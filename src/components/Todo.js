import React from "react"
import "./Todo.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleCheck,
  faCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons"
const Todo = () => {
  return (
    <div>
      <div className="todo__item todo__complete">
        <button type="button" className="todo__item__btn-circle ">
          <FontAwesomeIcon icon={faCircleCheck} className="icon-check" />
          <FontAwesomeIcon icon={faCircle} className="icon-circle" />
        </button>

        <li className="todo__item__text">Complete React course</li>
        <button type="button" className="todo__item__btn-trash">
          <FontAwesomeIcon icon={faTrash} className="icon-trash" />
        </button>
      </div>
    </div>
  )
}

export default Todo
