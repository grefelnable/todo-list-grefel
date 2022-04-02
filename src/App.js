import React from "react"
import "./App.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleCheck,
  faCircle,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons"

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
          <FontAwesomeIcon
            icon={faClipboardCheck}
            className="todo__header__icon"
          />
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
      </main>
    </div>
  )
}

export default App
