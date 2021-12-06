import React from 'react'

const Card = (props) => {
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={props.pokemon.img} alt="" />
            </div>
            <div className="card-title">
                {props.pokemon.name}
            </div>
            <div className="card-types">
                {props.pokemon.types.map(type=>{
                    return (
                        <span className="card-type" key={type}>
                            {type.type.name}
                        </span>
                    )
                })}
            </div>
            <div className="stats">
                <span>
                    hp: {props.pokemon.stats.hp}
                </span>
                <span>
                    attack: {props.pokemon.stats.attack}
                </span>
                <span>
                    defense: {props.pokemon.stats.defense}
                </span>
                <span>
                    speed: {props.pokemon.stats.speed}
                </span>
                <span>
                    height: {props.pokemon.height}
                </span>
                <span>
                    weight: {props.pokemon.weight}
                </span>
            </div>
           
            
        </div>
    )
}

export default Card
