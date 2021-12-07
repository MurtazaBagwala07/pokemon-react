import React,{useState} from 'react'
import Card from '../UI/Card'


const Pokedex = () => {
    
    const [pokemonName,setPokemonName] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [pokemon,setPokemon] = useState(null)
    const submitHandler = (e) => {
        e.preventDefault();
        const dataFetch= async()=>{
            setIsLoading(true);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            const data = await response.json()
            console.log(data)
    
            setPokemon({
                name:data.name,
                weight : data.weight,
                stats:{
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    speed: data.stats[5].base_stat
                },
                types:data.types,
                height : data.height,
                img : data.sprites.other.dream_world.front_default,
            })
            setIsLoading(false)   
        }
        dataFetch();
        
    }


    

    return (
        <div className="pokedex-wrapper">
            <div className="pokedex-index">
            <form onSubmit={submitHandler}>
                <input
                className="pokedex-input" 
                type="text" 
                value={pokemonName}
                onChange={(e)=>{setPokemonName(e.target.value)}}
                />
                <button className="pokedex-btn">Search</button>
            </form>
            </div>
            <div className="pokedex-result">
                {isLoading && <h1>Loading...</h1>}
                {!isLoading && pokemon && <Card pokemon={pokemon}/>}
            </div>
        </div>
    )
}

export default Pokedex
