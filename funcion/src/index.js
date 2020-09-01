import React from "react"
import ReactDom from "react-dom"

function MyApp() {
  return (
    <div>
      <h1>José Castelan</h1>
      <p>Esto es un paragraph</p>
      <ul>
        <li>Ichi</li>
        <li>Ni</li>
        <li>San</li>
      </ul>
    </div>
  )
}

ReactDom.render(
  <MyApp />,
  document.getElementById("root")
)
