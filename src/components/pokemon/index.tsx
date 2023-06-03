
import { useEffect, useState } from "react";
import axios from "axios";
import { IPokemon } from "../../interfaces/pokemon";


export function PokemonCard({ data }: { data: IPokemon}) {
  const [pokemon, setPokemon] = useState<IPokemon | undefined>();
  

  useEffect(() => {
    const getPokemons = () => {
      axios
        .get(data.url)
        .then((response) => setPokemon(response.data))
        .catch((err) => console.error(err));
    };
    getPokemons();
  }, [data.url]);
 
  return (
    <div className="pokemonCard">
       <img
        src={pokemon?.sprites?.front_default}
        alt="Pokemon Card"
        className="imagemPokemonCard"
        />
      <h1 className="name">{data.name}</h1>
      <div className="poderPokemon">
      
      {pokemon?.types?.map((type:any, index: number) => {
        return (
          <p key={index} className="Name">
            {type.type.name} 
          </p>
        );
      })}
      </div>
    </div>
  )
}

