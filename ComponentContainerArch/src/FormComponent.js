import React from "react"

function FormComponent(props) {
    return (
        <main>
                <form>
                    <input name="first_name" value={props.data.first_name} placeholder="First Name" onChange={props.actualizacion} /><br />
                    <input name="last_name" value={props.data.last_name} placeholder="Last Name" onChange={props.actualizacion}/><br />
                    <input name="age" value={props.data.age} placeholder="Age" onChange={props.actualizacion}/><br />
                    
                    <br/>
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="masculino"
                            checked={props.data.gender === "masculino"}
                            onChange={props.actualizacion}
                        /> Male
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="femenino"
                            checked={props.data.gender === "femenino"}
                            onChange={props.actualizacion}
                        /> Female
                    </label>
                    <br />
                    
                    <label>Destination:</label>
                    <select 
                        value={props.data.destination}
                        onChange={props.actualizacion}
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
                            checked={props.data.vegan}
                            onChange={props.actualizacion}
                        /> Vegano?
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="no_sea"
                            checked={props.data.no_sea}
                            onChange={props.actualizacion}
                        /> Alergico a los mariscos?
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="no_gluten"
                            checked={props.data.no_gluten}
                            onChange={props.actualizacion}
                        /> Seliaco?
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
            <p>Your name: {props.data.first_name} {props.data.last_name}</p>
                <p>Your age: {props.data.age}</p>
                <p>Your gender: {props.data.gender}</p>
                <p>Your destination: {props.data.destination}</p>
                <p>
                    Your dietary restrictions: 
                    <ul>
                    <li>Vegano: {props.data.vegan ? "Si": "No"} </li>
                    <li>Seliaco: {props.data.no_gluten ? "Si": "No"} </li>
                    <li>Alérgico a los marisco {props.data.no_sea ? "Si": "No"} </li>
                    </ul>
                </p>
            </main>
    )
}

export default FormComponent