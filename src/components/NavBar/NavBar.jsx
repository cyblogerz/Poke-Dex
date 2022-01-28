import React from "react";
import "./NavBar.css";

export default function NavBar(){
    return(
        <div className="NavBar">
        <h1 className="title">PokeDex</h1>
        <ul className="links">
            <li className="nav-link"><a href="/">About</a></li>
            <li className="nav-link"><a href="/">Pokemon </a> </li>
            <li className="className"><a href="/">Home</a></li>
        </ul>
        </div>
    );
}



