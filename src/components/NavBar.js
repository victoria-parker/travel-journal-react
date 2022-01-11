import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

export default function NavBar(){
    return (
        <nav className="NavBar">
            <span className="nav-title"><FontAwesomeIcon icon={faGlobeAmericas} /> my travel journal.</span>
        </nav>
    )
}