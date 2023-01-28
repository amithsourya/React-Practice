import React from "react"
import ReactDOM from "react-dom/client"

import Card from "./Card"
import data from "../data"

export default function Nav(){
    const arr = data.map(item => 
        <Card
            key = {item.id}
            {...item}
        />
    )
    return(
        <section>
            {arr}
        </section>
    )
}