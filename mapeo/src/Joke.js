import React from "react"

function Joke(props) {
    console.log(props)
    return (
        <div className="joke">
            <h1 style={{display: props.question ? "block" : "none"}}>Answer: {props.question}</h1>
            <h3 style={{color: !props.question && "#888888"}}>Question: {props.punchLine}</h3>
        </div>
    )
}

export default Joke