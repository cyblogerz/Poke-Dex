import React from 'react';
import "./pokeCard.css"

const tabStyle = {
    color:"red",
}

function PokeCard(props) {
    return <div className='card' style={props.isTab ? {minWidth : "100%"} : null}>
    <div className="card-img"></div>
    <div className="pinfo">
    <p className="num">{props.num}</p>
    <h1 className='poke-name'>{props.name}</h1>
    </div>
   
    <div className="type">{props.type}</div>
    </div>;
}

export default PokeCard;
