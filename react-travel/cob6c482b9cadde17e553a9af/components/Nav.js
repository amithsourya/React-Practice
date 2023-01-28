import React from "react"
import ReactDOM from "react-dom/client"

export default function Nav(){
    //const earth = "https://cdn.pixabay.com/photo/2014/04/02/14/08/globe-306260_960_720.png"
    const earth = "https://cdn.pixabay.com/photo/2014/04/02/17/00/globe-307634_960_720.png"
    //const earth = "https://www.nicepng.com/png/detail/45-455403_white-globe-icon-johns-hopkins-logo-white.png"
    //const earth="../images/earth.png"
    return(
        <nav className="navigation">
            <img src={earth} id="earth"/>
            <p>my travel journal.</p>
        </nav>
    )
}