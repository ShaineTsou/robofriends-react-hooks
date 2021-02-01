import React, { useEffect, useState } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
    /* 
    When the App function runs, it creates the initial state, after the first render it runs useEffect.
    The userEffect will update the robots state, which is another render, so userEffect gets run again, causing a continuous loop.
    Ideally, the useEffect hook with a fetch method should only run once.
    */
    /* 
    To avoid useEffect runs over and over again, add an empty array instead of any state variable as the second argument.
    After the component mounts, the empyt array will no longer change, so the useEffect hook will only run initially.
    */
    const [robots, setRobots] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
    }, []) 
    
    const [searchfield, setSearchfield] = useState('')
    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }
    
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ? 
    <h1 className='tc'>Loading</h1> : 
    (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={ onSearchChange } />
            <Scroll>
                <CardList robots={ filteredRobots } />
            </Scroll>
        </div>
    );
}

export default App;