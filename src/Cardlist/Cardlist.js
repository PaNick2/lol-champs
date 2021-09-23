import React from 'react';
import Card from '../Card/Card.js';


const Cardlist = ({ robots }) => {
    const cardArray = robots.map((user, i ) => {
        return (
        <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            title={robots[i].title}
            description={robots[i].description}
            />
            )
    })
    return (
        <>
            {cardArray}
        </>

    )
}

export default Cardlist;