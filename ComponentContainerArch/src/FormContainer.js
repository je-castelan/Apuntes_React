import React, {Component} from "react"
import FormComponent from "./FormComponent"


class FormContainer extends Component {
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
            <FormComponent
                actualizacion = {this.actualizacion}
                data = {this.state}
            />
        )
    }
}

export default FormContainer
