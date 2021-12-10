import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Bookmark = (props) => {
    const {
        addPokemonToFav,
        removePokemonFromFav,
    }=useContext(GlobalContext)
    return (
        <div >
            {<i onClick={()=>addPokemonToFav(props.pokemon)} class="far fa-bookmark"></i>}
            {<i onClick={()=>removePokemonFromFav(props.pokemon.id)} class="fas fa-bookmark"></i>}
        </div>
    )
}

export default Bookmark
