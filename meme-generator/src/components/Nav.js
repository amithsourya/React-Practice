import React from "react"
//import "../images/t"
export default function Nav(){
    return (
        <nav className="navigation">
            <img src={require("../images/troll-face.png")} className="logo"/>
            <p className="title">Meme Generator</p>
            <p className="subtitle">generate your memes</p>
        </nav>
    )
}