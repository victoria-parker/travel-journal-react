import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function Card(){
    return (
        <div className="card">
            <div className="card-image">
                <img src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Mount Fuji"/>
            </div>
            <div className="card-text">
                <div className="location">
                    <span className="location-place"><FontAwesomeIcon icon={faMapMarkerAlt} className="icon"/>Japan</span>
                    <span className="location-maps"><a href="#s">View on Google Maps</a></span>
                </div>
                <h2 className="title">Mount Fuji</h2>
                <div className="dates">
                    <p>12 Jan, 2021 - 24 Jan, 2021</p>
                </div>
                <div className="description">
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
        </div>
    )
}