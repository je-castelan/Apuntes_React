
import React from "react"

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "Jose Castelan",
            age: "31",
            isLoggedIn: false
        }
    }

    render() {
        let logged
        if (this.state.isLoggedIn){
            logged = "In"
        } else {
            logged = "Out"
        }

        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
                <h5>You are logged {logged}</h5>
            </div>
        )
    }

}

export default App