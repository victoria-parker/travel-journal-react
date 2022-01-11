import React from "react"
import "./style.css"
import NavBar from "./components/NavBar"
import Card from "./components/Card"
import data from "./data"

export default function App(){
    const cards=data.map(item=>{
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <div className="container">
            <NavBar/>
            <section className="cards">
                {cards}
            </section>
        </div>
    )
}