import React from "react"

import TodoItem from "./TodoItem"
import todosData from './todosData'

import './index.css';

const todoComponent = todosData.map (todo => <TodoItem id={todo.id} todo={todo} />)

function App() {
  return (
    <div className="todo-list">
        {todoComponent}
    </div>
  )
}

export default App