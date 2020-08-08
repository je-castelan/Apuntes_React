import React from "react"

function Product(props) {
    console.log(props)
    return (
        <div className="product">
            <h1>{props.name}</h1>
            <h3>{props.description}</h3>
            <p>${props.price} + tax</p>
        </div>
    )
}

export default Product