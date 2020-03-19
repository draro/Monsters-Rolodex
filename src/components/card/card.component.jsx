import React from 'react'
import './card.style.css'
export const Card = (props) => (
    <div className='card-container'>
        <img className='robot' src={`https://robohash.org/${props.monster.username}?size=180x180`} alt={props.monster.name}/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)