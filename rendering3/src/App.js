import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            logged: false
        }
        this.loginClick = this.loginClick.bind(this)
    }

    loginClick(){
      this.setState(prevState => {
            return {
                logged: !prevState.logged
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.loginClick}>{this.state.logged ? "LogOut": "LogIn"}</button>
                {
                <h1>{this.state.logged ? "Logged In": "Logged Out"}</h1>
                }
            </div>
        )
    }

}

export default App
