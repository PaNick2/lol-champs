import React, { useState, useEffect } from 'react';
import './App.css';
import Cardlist from './Cardlist/Cardlist';
import { robots } from './robots.js';
import Searchbox from './Searchbox/Searchbox';

const App = () => {
    const [filteredRobots, setFilteredRobots] = useState(robots)
    const [searchfield, setSearchfield] = useState("")
    useEffect(() => {
        const filter = () => robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        setFilteredRobots(filter)
    },[searchfield])



    return (
        <div>
            <h1>League of Legends</h1>
            <Searchbox searchfield={searchfield} setSearchfield={setSearchfield}/>
            <Cardlist robots={filteredRobots}/>       
        </div>

    )
}

export default App;