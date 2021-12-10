import React,{createContext,useReducer,useEffect} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    favMons : localStorage.getItem('favMons')
        ? JSON.parse(localStorage.getItem('favMons')) : [],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = props => {
    const [state,dispatch] =useReducer(AppReducer,initialState)

    useEffect(()=>{
        localStorage.setItem('favMons', JSON.stringify(state.favMons))
    },[state])

    const addPokemonToFav = (pokemon) =>{
        dispatch({type: "ADD_POKEMON_TO_FAV", payload: pokemon})
    }

    const removePokemonFromFav = (id) =>{
        dispatch({type: "REMOVE_POKEMON_FROM_FAV", payload:id})
    }

    return (
        <GlobalContext.Provider value={{
            favMons: state.favMons,
            addPokemonToFav: addPokemonToFav,
            removePokemonFromFav: removePokemonFromFav,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
