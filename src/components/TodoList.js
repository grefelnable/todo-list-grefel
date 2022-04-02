import React from "react"
import "./TodoList.scss"
import Todo from "./Todo"

const Todolist = () => {
  return (
    <div className="todo-list-container">
      <ul className="todo__list">
        <Todo />
        <Todo />
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
