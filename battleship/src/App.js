import React, { Component } from 'react';
import './App.css';

import Board from "./components/Board"
import InfoBoard from "./components/InfoBoard"



class App extends Component {
    constructor(){
        super()
        this.state = {
            torpedos: 0,
            shipSizes: [],
            shipTiles: [],
            ships: []
        }
    }

    callBack = (torp, sh) => {
        let { torpedos, shipSizes, shipTiles } = this.state

        sh.forEach(v=>{
            //this.state.ships.push(v.size)
            shipSizes.push(v.size)
            shipTiles.push(v.tiles.length)
        })

        this.setState({
            torpedos: torp,
            shipSizes: shipSizes,
            shipTiles: shipTiles,
            ships: sh//JSON.stringify(sh)
        })

        console.log("Size : "+shipSizes)
        console.log("Leng : "+shipTiles)

        let dsd = JSON.stringify(sh)
        console.log("JSON???  " + dsd)
    }



    render(){
        return (
          <div className="App">
            App

            <Board sendInfo={this.callBack}/>
            <InfoBoard torpedos={this.state.torpedos} shipsSizes={this.state.shipSizes} shipsHealth={this.state.shipTiles} ships={this.state.ships}/>
          </div>
        )
    }
}

export default App;
