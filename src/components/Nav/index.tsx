
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
       placeholder="Buscar Pokemon" 
       className="search"
       onChange={(e) =>filteredPokemons(e.target.value)}
       />
    </div>
  )
}

