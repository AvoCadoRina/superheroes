import React from 'react';
import HeroesList from './HeroesList';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <HeroesList></HeroesList>
            </div>
        );
    }
}

export default App;