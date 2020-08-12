import React from "react"

function Conditional(props) {
    console.log(props)
    let salida =(props.isLoading) ? "Cargando..." :  "Listo"

    return (
        <h1>{salida}</h1>
    )
}

export default Conditional