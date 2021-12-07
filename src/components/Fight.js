import React from 'react'
import PokemonTypes from '../assets/PokemonTypes.png'
import FightElements from '../assets/FightElements.jpg'

const Fight = () => {
    return (
        <div className="fight-wrapper">
            <div className="elements">
                <div className="elements-heading">
                    Elements in Pokemon
                </div>
                <div className="elements-logo">
                    <img src={PokemonTypes} alt="" />
                </div>
            </div>
            <div className="fight-elements">
                <div className="fight-elements-heading">
                    What elements to use against different elements
                </div>
                <div className="fight-elements-logo">
                    <img src={FightElements} alt="" />
                </div>
            </div>
            <div className="abbreviations">
                <p>Abbreviations</p>
                <p>SE : Super Effective</p>
                <p>Reg : Regular</p>
                <p>NVE : Not Very Effective</p>
            </div>            
        </div>
    )
}

export default Fight
