import React from 'react';
import './Searchbox.css';

const Searchbox = ({ searchfield, setSearchfield }) => {
    return (
        <div>
            <input type='search' placeholder='Search Robots'  value={searchfield} onChange={e => setSearchfield(e.target.value)}/>
        </div>

    )
}

export default Searchbox