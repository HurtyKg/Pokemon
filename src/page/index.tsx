import { api } from "../api";
import { Nav } from "../components/Nav";
import { PokemonCard } from "../components/pokemon";

import axios from 'axios'
import { useEffect, useState } from 'react';
import { IPokemon } from "../interfaces/pokemon";


export function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [filterPokemon, setFilterPokemon] = useState('')
  
  

  const filteredPokemons = (name:string) => {
    setFilterPokemon(name)
  }

  useEffect(() =>{
    getPokemons();
  },[]);
     const getPokemons = () => {
     axios
     .get(api)
    .then((response) => setPokemons(response.data.results))
    .catch((err) => console.error(err));
 }



  return (
    <>
    <Nav 
    filteredPokemons={filteredPokemons}
    />
    <div className="container">
      <div className="content"> 
      {pokemons.filter((pokemon) => pokemon.name.includes(filterPokemon)).map((p,index) => {
        return (
     <PokemonCard key={index} data={p}/>
        )
      })}
      </div>
    </div>
    </>
  )
}

