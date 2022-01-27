import React from "react";
import "./NavBar.css";

export default function NavBar(){
    return(
        <div className="NavBar">
        <h1 className="title">PokeDex</h1>
        <div className="links">
        <a href="/" className="nav-link">Home</a>
        <a href="/" className="nav-link">About</a>
        <a href="/" className="nav-link">Pokemon</a>
        </div>
        

        </div>
    );
}



