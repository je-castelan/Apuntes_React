import React from "react"
import ReactDom from "react-dom"

function App() {
  const firstName = "Jose"
  const lastName = "Castelan"
  const date = new Date()
  const hours = date.getHours()

  let timeOfDay


  if (hours < 12) {
    timeOfDay = "Buenos días"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Buenas tardes"
  } else {
    timeOfDay = "Buenas noches"
  }


  return (
    <div>
        <h1>{`${timeOfDay} ${firstName} ${lastName}!`}  </h1>
        <p>Ya son las { date.getHours() % 12} </p>
    </div>

  )

}

ReactDom.render(
  <App />,
  document.getElementById("root")
)