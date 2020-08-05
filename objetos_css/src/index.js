import React from "react"
import ReactDom from "react-dom"

function App() {
  const firstName = "Jose"
  const lastName = "Castelan"
  const date = new Date()
  const hours = date.getHours()

  let timeOfDay

  const styles = {
      fontSize: "24px"
    }

  if (hours < 12) {
    timeOfDay = "Buenos días"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Buenas tardes"
    styles.color = "#2E0927"
  } else {
    timeOfDay = "Buenas noches"
    styles.color = "#D90000"
  }



  return (
    <div>
        <h1 style ={styles}>{`${timeOfDay} ${firstName} ${lastName}!`}  </h1>
        <p>Ya son las { hours % 12} </p>
    </div>
  )

}

ReactDom.render(
  <App />,
  document.getElementById("root")
)