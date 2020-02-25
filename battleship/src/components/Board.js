import React, { Component } from 'react';

import ShipLogic from "../ShipLogic"


export default class Board extends Component {
    constructor(props){
        super(props)

        this.Icons = {
            ship: '⛴',
            miss: '❌',
            default: "C"
        }

        this.Initials = {
            size: 10,
            torpedoes: 100
        }


        this.state = {
          numShips: 5,
          torpedoes: this.Initials.torpedoes,  //25
          size: this.Initials.size,
          displayBoard : this.generateDisplayboard(this.Initials.size),
          ships: [],
          shipsIndexes: [],
          indexesClicked: []
        }
            this.props.sendInfo(this.state.torpedoes,this.state.ships)
        //this.setUpBoard()
    }



    generateDisplayboard = ( size ) => {
        let displayBoard = new Array(size**2)
        for (let i = 0; i < displayBoard.length; i++){
            displayBoard[i] = ( <div className="Square" onClick = {() => this.handleClick(i)}>{this.Icons.default}</div> )
         }
        return displayBoard
    }



    updateDisplayboard = ( index, indexesClicked ) => {
        let { size, ships, shipsIndexes } = this.state
        let sizeSq = size**2

        let displayBoard = new Array(sizeSq)

        for (let i=0; i<sizeSq; i++){
            let icon = this.Icons.default
            if( indexesClicked.includes(i) ){
                if ( shipsIndexes.includes(i) ){
                    icon = this.Icons.ship
                }else{
                    icon = this.Icons.miss
                }
            }
            displayBoard[i] = ( <div className="Square" onClick = {() => this.handleClick(i)}>{icon}</div> )
        }
        this.setState({ displayBoard : displayBoard })
    }



    handleClick( index ){
        let { shipsIndexes, ships, size, torpedoes, indexesClicked } = this.state

        if(torpedoes === 0){
            alert("Out Of Torpedoes!")
            return
        }

        if( !indexesClicked.includes(index) )
        {
            torpedoes--
            indexesClicked.push(index)
        }

        console.log(shipsIndexes)
        if (shipsIndexes.includes(index)){

            //// * * * * * * * * * * * * * * * * * * * * * *
            // go through ships object,
            // if find 'index' inside ship,
            // remove that index from tiles.
            //
            // if the length of that ship's tiles is 0,
            // we know we have sunken the battle ship.
            //// * * * * * * * * * * * * * * * * * * * * * *

            ships.forEach( (s,ii) => {
                if (s.tiles.includes(index)){

                    let iRemove = s.tiles.indexOf(index)
                    s.tiles = s.tiles.slice(0,iRemove).concat(s.tiles.slice(iRemove+1,s.tiles.length))

                    if (s.tiles.length === 0){
                        alert(`Ship of length ${s.size} has been sunk!`)
                        ships = ships.slice(0,ii).concat(ships.slice(ii+1,ships.length))
                        console.log("Ships Left: " + ships.length)
                        if (ships.length === 0){
                            alert(`All Ships have been sunk!`)
                        }
                    }
                }
            })
        }

        this.updateDisplayboard(index, indexesClicked)

        this.setState({
            torpedoes: torpedoes,
            indexesClicked: indexesClicked,
            ships: ships
        })
        let shipInfo=[]
        this.props.sendInfo(torpedoes,ships)
    }


    setUpBoard = () => {
        let [ themShups, indexList ] = ShipLogic.generateShips()
        let { displayBoard, size } = this.state

        this.props.sendInfo(this.Initials.torpedoes,themShups)
        displayBoard = this.generateDisplayboard(size)


        console.log(`Index List: ${indexList}`)
        this.setState({
            ships: themShups,
            shipsIndexes: indexList,
            displayBoard: displayBoard,
            indexesClicked: [],
            torpedoes: this.Initials.torpedoes
        })
        //this.props.sendInfo(this.Initials.torpedoes,this.state.ships)
    }




/// ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
    render(){

        return (
          <div className="DisplayBoard">
            {this.state.displayBoard}
            <button onClick={this.setUpBoard}>Start Game</button>
          </div>
        )
    }
}
