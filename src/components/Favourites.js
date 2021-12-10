import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import Card from '../UI/Card'
const Favourites = () => {
    const {
        favMons
    }=useContext(GlobalContext)
    let display = favMons.map(mon=>{
        return (
            <Card pokemon={mon}/>
        )
    })
    return (
        <div>
            {display}
        </div>
    )
}

export default Favourites
