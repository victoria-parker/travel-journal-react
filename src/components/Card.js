import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function Card(props){
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.item.imgUrl} alt="Mount Fuji"/>
            </div>
            <div className="card-text">
                <div className="location">
                    <span className="location-place"><FontAwesomeIcon icon={faMapMarkerAlt} className="icon"/>{props.item.location}</span>
                    <span className="location-maps"><a href={props.item.googleMapLink}>View on Google Maps</a></span>
                </div>
                <h2 className="title">{props.item.title}</h2>
                <div className="dates">
                    <p>{props.item.startDate} - {props.item.endDate}</p>
                </div>
                <div className="description">
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}