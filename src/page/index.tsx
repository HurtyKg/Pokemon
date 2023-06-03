import { api } from "../api";
import { Nav } from "../components/Nav";
import { PokemonCard } from "../components/pokemon";

import axios from 'axios'
import { useEffect, useState } from 'react';
import { IPokemon } from "../interfaces/pokemon";


export function Home() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [filterPokemon, setFilterPokemon] = useState('')
  const [visiblePokemons, setVisiblePokemons] = useState(12); 
  const [loadMoreVisible, setLoadMoreVisible] =  useState(true); 

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
    setLoadMoreVisible(true);
 }

 const handleLoadMore = () => {
  setVisiblePokemons(visiblePokemons + 12); 
}

const handleLoadLess = () => {
  setVisiblePokemons(visiblePokemons - 12); 
}

  return (
    <>
    <Nav 
    filteredPokemons={filteredPokemons}
    />
    <div className="container">
      <div className="content"> 
      
      {pokemons
        .filter((pokemon) => pokemon.name.includes(filterPokemon))
        .slice(0, visiblePokemons) 
        .map((p, index) => (
          <PokemonCard key={index} data={p} />
        ))}
         <div className="buttons">
         {filterPokemon === '' && visiblePokemons > 12 && (
          <button onClick={handleLoadLess} color="success" className="button">
            Ver menos -
          </button>
        )}
       {filterPokemon === '' && loadMoreVisible && (
          <button onClick={handleLoadMore} color="success" className="button">
            Ver mais +
          </button>
        )}
        {!filterPokemon && (
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="voltar">
               voltar
           </button>
         )}

       </div>
      </div>
    </div>
    </>
  )
}

