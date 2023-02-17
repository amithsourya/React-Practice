import React from "react"

export default function Nav(){
    return (
        <nav className="navigation">
            <img src={require("../images/troll-face.png")} className="logo"/>
            <p className="title">Meme Generator</p>
            <a href="https://github.com/amithsourya" className="subtitle">github.com/amithsourya</a>
            </nav>
    )
}