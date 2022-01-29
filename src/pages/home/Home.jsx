import React from 'react';
import PokeCard from '../../components/pokemon-card/pokeCard';
import './home.css'

export default function Home(props) {
  return( 
  <div>
  <div className='container'></div>
  <h1 className='heading'>Poké-Dex</h1>
  <button className="surp">Surprise Me! 🎁</button>
  <div className="main">

     <h1 className="mtitle heading">POKÉMON GALLERY</h1>
     <PokeCard num={"001"} name={"Bulbasaur"} type={"fire"} isTab={props.isTab} />
  </div>
  
  </div>
  );
  
}
