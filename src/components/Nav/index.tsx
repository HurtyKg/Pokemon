
import pokekemonIcon from "../../assets/poke.png"


interface INav  {
  filteredPokemons: (name:string) => void;
}


export const Nav:React.FC<INav>=({filteredPokemons} ) =>{
  return (
    <div className="nav">
  
      <img src={pokekemonIcon} alt="Icon Pokemon" className='imageTitle'/>
      <input type="text"
       name="" 
       id="" 
       placeholder="Digite o Pokémon que você deseje ver" 
       className="search"
       onChange={(e) =>filteredPokemons(e.target.value)}
       />
    </div>
  )
}

