import React from "react"
import "./style.css"
import NavBar from "./components/NavBar"
import Card from "./components/Card"

export default function App(){
    return (
        <div className="container">
            <NavBar/>
            <section className="cards">
                <Card/>
            </section>
        </div>
    )
}