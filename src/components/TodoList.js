import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faCircle } from "@fortawesome/free-solid-svg-icons"
import "./TodoList.scss"

const Todolist = () => {
  return (
    <div className="todo-list-container">
      <ul className="todo__list">
        <li className="todo__item todo__complete">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="todo__item__circle-check"
          />
          Complete React course
        </li>
        <li className="todo__item">
          <FontAwesomeIcon
            icon={faCircle}
            className="todo__item__circle-check"
          />
          Workout
        </li>
      </ul>
      {/* end of todo list */}
      {/* todo footer */}
      <footer className="todo__footer">
        <p className="todo__footer__items-left">1 item left</p>
        <section className="todo__footer__btns">
          <button type="button" className="btn__all btn btn-active">
            All
          </button>
          <button type="button" className="btn__active btn">
            Active
          </button>
          <button type="button" className="btn__completed btn">
            Completed
          </button>
        </section>
        <button type="button" className="todo__btn-clear btn">
          Clear Completed
        </button>
      </footer>
    </div>
  )
}

export default Todolist
