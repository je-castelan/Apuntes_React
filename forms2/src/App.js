import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            first_name: "",
            last_name: "",
            age: "",
            gender: "",
            destination: "",
            dietary: "",
            no_gluten: "",
            no_sea: "",
            vegan: ""
        }
        this.actualizacion = this.actualizacion.bind(this)
    }
    
    actualizacion(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    render() {
        return (
            <main>
                <form>
                    <input name="first_name" value={this.state.first_name} placeholder="First Name" onChange={this.actualizacion} /><br />
                    <input name="last_name" value={this.state.last_name} placeholder="Last Name" onChange={this.actualizacion}/><br />
                    <input name="age" value={this.state.age} placeholder="Age" onChange={this.actualizacion}/><br />
                    
                    <br/>
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="masculino"
                            checked={this.state.gender === "masculino"}
                            onChange={this.actualizacion}
                        /> Male
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="femenino"
                            checked={this.state.gender === "femenino"}
                            onChange={this.actualizacion}
                        /> Female
                    </label>
                    <br />
                    
                    <label>Destination:</label>
                    <select 
                        value={this.state.destination}
                        onChange={this.actualizacion}
                        name="destination"
                    >
                        <option value="Japon">Japon</option>
                        <option value="Italia">Italia</option>
                        <option value="Francia">Francia</option>
                        <option value="EUA">EUA</option>
                        <option value="Brasil">Brasil</option>
                    </select>
                    <br />
                    
                    <label>
                        <input 
                            type="checkbox" 
                            name="vegan"
                            checked={this.state.vegan}
                            onChange={this.actualizacion}
                        /> Vegano?
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="no_sea"
                            checked={this.state.no_sea}
                            onChange={this.actualizacion}
                        /> Alergico a los mariscos?
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="no_gluten"
                            checked={this.state.no_gluten}
                            onChange={this.actualizacion}
                        /> Seliaco?
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
            <p>Your name: {this.state.first_name} {this.state.last_name}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    <ul>
                    <li>Vegano: {this.state.vegan ? "Si": "No"} </li>
                    <li>Seliaco: {this.state.no_gluten ? "Si": "No"} </li>
                    <li>Alérgico a los marisco {this.state.no_sea ? "Si": "No"} </li>
                    </ul>
                </p>
            </main>
        )
    }
}

export default App
