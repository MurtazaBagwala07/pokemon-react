import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Bookmark = (props) => {
    const {
        addPokemonToFav,
        removePokemonFromFav,
    }=useContext(GlobalContext)
    return (
        <div >
            {<i  onClick={()=>{addPokemonToFav(props.pokemon); alert("added")}} class="far fa-bookmark" ></i>}
            {<i  onClick={()=>{removePokemonFromFav(props.pokemon.id); alert("removed")}} class="fas fa-ban"></i>}
        </div>
    )
}

export default Bookmark
