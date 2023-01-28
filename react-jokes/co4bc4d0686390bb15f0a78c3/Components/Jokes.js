import React from "react"

let count=1
export default function Jokes(props){
    
    return(
        <div className="jokes">
            <div className="count">{count++}</div>
            <div className="setup">
                {props.setup}
            </div>
            <div className="punchline">
                {props.punchline}
            </div>
        </div>    
    )
}