import React, { Component } from 'react';

import ShipLogic from "../ShipLogic"


export default class Board extends Component {
      constructor(props){
        super(props)

        this.Ships = new ShipLogic()

        this.state = {
          numShips: 5,
          torpedoes: 25,
          size: 10,
          untouchedIcon: ".",
          gameBoard : [],
          ships: [],
          shipsIndexes: [],
          displayBoard: "",
        }
        this.state.gameBoard = this.buildBoard(this.state.size)
        this.state.displayBoard = this.generateDisplayboard(this.state.gameBoard, this.state.size)
        }


    buildBoard = (num) => {
        let newRow = []
        for (let i = 0; i < num**2; i++){
            newRow = newRow.concat(this.state.untouchedIcon)
          }
        return newRow
    }


    generateDisplayboard = (gameBoard, size, newIcon = "🤔") => {
        let displayBoard = Array.from(gameBoard)
        for (let i = 0; i < displayBoard.length; i++){

            /////   [ ! ]    REPLACE
            //Temporararly Displaying All Ships                                             // displayBoard[i]
            displayBoard[i] = ( <div className="Square" onClick = {() => this.handleClick(i)}>{displayBoard[i]}</div> )
         }
        return displayBoard
    }

    handleClick(index){
        //console.log(`CLICKED!!!!  ${index} : ${this.state.gameBoard[index]}`)
        let { shipsIndexes, gameBoard, ships, size, torpedoes, displayBoard } = this.state

        if(torpedoes === 0){
            alert("Out Of Torpedoes!")
            return
        }

        if(gameBoard[index] === this.state.untouchedIcon){
            torpedoes--
        }

        console.log(shipsIndexes)
        if (shipsIndexes.includes(index)){
            //console.log(`Found: `)
            let boatSize = gameBoard[index]
            //console.log(`Found: ${boatSize}`)
            gameBoard[index] = '⛴'
        }
        else{
            gameBoard[index] = '❌'
        }

        displayBoard = this.generateDisplayboard(gameBoard, size)


        this.setState({
            // ships: themShups,
            // shipsIndexes: indexList,
            torpedoes: torpedoes,
            gameBoard: gameBoard,
            displayBoard: displayBoard
        })
    }


    setUpBoard = () => {
        let [themShups, indexList] = this.Ships.generateShips()
        let { gameBoard, displayBoard, size } = this.state

        //gameBoard = new Array(size)
        gameBoard = gameBoard.map(v => v=this.state.untouchedIcon)


        console.log(themShups)
        console.log(themShups)
        //console.log(themShups[3].tiles)


        for(let s=0; s<this.state.numShips; s++){
            themShups[s].tiles.forEach(pos => {
                gameBoard[pos] = s+1
            });
        }


        displayBoard = this.generateDisplayboard(gameBoard, size)

        console.log(gameBoard)

        console.log(`Index List: ${indexList}`)

        this.setState({
            ships: themShups,
            shipsIndexes: indexList,
            gameBoard: gameBoard,
            displayBoard: displayBoard
        })

    }





    render(){


        //let A = this.Ships.generateShips()


        //console.log(A[4].tiles)


/// Actual Rendering
        console.log("Rendering Board ... ")
        return (
          <div className="DisplayBoard">
            {this.state.displayBoard}
            <button onClick={this.setUpBoard}>Start Game</button>
          </div>
        )
    }
}
