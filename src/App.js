import React from "react"
import "./App.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faCircle } from "@fortawesome/free-solid-svg-icons"

function App() {
  return (
    <div className="container">
      <div className="img-container">
        <img src="../assets/office.jpg" alt="laptop on the desk" />
      </div>
      <main className="todo">
        {/* header title */}
        <header className="todo__header">
          <h1 className="todo__header-title">TODO</h1>
        </header>
        {/* end of header title */}
        {/* todo input */}
        <input
          type="text"
          placeholder="Create a new todo... "
          className="todo__textInput"
        ></input>
        {/* end of todo input */}
        {/* todo list */}
        <ul className="todo__list">
          <li className="todo__item">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="todo__circle-check"
            />
            Complete React course
          </li>
          <li className="todo__item">
            <FontAwesomeIcon icon={faCircle} className="todo__circle-check" />
            Workout
          </li>
        </ul>
        {/* end of todo list */}
        {/* todo footer */}
        <footer className="todo__footer">
          <p className="todo__items-left">1 item left</p>
          <section className="todo__btns">
            <button type="button" className="todo__btn-all">
              All
            </button>
            <button type="button" className="todo__btn-active">
              Active
            </button>
            <button type="button" className="todo__btn-completed">
              Completed
            </button>
          </section>
          <button type="button" className="todo__btn-clear">
            Clear Completed
          </button>
        </footer>
      </main>
    </div>
  )
}

export default App
