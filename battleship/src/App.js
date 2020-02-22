import React, { Component } from 'react';
import './App.css';

import Board from "./components/Board"



class App extends Component {
    render(){
        //new ShipLogic()
        return (
          <div className="App">
            App
            <Board/>
          </div>
        )
    }
}

export default App;
