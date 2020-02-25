import React, { Component } from 'react';


export default class InfoBoard extends Component {
    constructor(props){
        super(props)
        this.state = {
            score:0,
            scoreList:[],
            shipsDisplay: []//this.generateShipsDisplay()
        }

        console.log("ARRay in : Sizes : " + this.props.shipsSizes)
        console.log("ARRay in : Health : " + this.props.shipsHealth)

        //this.generateShips()

    }

/// ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
    render(){
        let displayBoatInfo = this.props.ships.map(v => {
            return (<div>Boat: {v.size}  - - Health: {v.tiles.length}</div>)
        })
        //<div className="BoatsDisplay">{this.state.shipsDisplay[0]}</div>
        return (
          <div className="InfoBoard">
            <div>
            Torpedoes Left: {this.props.torpedos}
            </div>
            <div>
            Ships: <div className="BoatsDisplay">{displayBoatInfo}</div>
            </div>
            </div>

        )
    }
}
