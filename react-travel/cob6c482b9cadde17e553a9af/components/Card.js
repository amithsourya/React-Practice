import React from "react"
import ReactDOM from "react-dom/client"

export default function Nav(props){
    const logo="https://cdn.pixabay.com/photo/2013/07/13/11/54/location-158934_960_720.png"
    return(
        <div className="card">
            <img src={props.imageUrl} />
            <div className="content">
                <div className="main--title">
                    <img src={logo} className="pinlogo"/>
                    <p className="country">{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <p className="title">{props.title}</p>
                <p className="timeline">{`${props.startDate} - ${props.endDate}`}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
        
    )
}