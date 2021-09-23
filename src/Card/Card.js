import React from 'react';
import './Card.css';

const Card = (props) => {
    const { name, title, id, description } = props;
    return (
        <div className="card">
            <img alt='champion' src={`https://raw.communitydragon.org/latest/game/assets/characters/${id}/skins/base/${id}loadscreen.png`} width='100%'/>
            <div className='details'>
                <h2>{name}</h2>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Card;