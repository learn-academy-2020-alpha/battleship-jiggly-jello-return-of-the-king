export default class ShipLogic {
    constructor(){
        //console.log("Ships Ahoy!")

        this.maxShips = 5
        this.maxSize = 5
        function ShipBlueprint() {
            this.size = 0
            this.tiles = []
            //length 0 means dead
        }
        this.Ship = new ShipBlueprint()


        //ShipLogic.generateShips()
/*
        var A = new Ship()
        console.log(A)
*/




    //var A = new Ship()
    //A.tiles
    //A.Size







    //console.log(A)





    }


    generateShips = () => {
        let ships = new Array(this.maxShips)
        for(let c=1; c<=this.maxSize; c++){
            ships[c-1] = Object.create(this.Ship)
            ships[c-1].size = c
            ships[c-1].tiles = this.getAvailableTiles(c)

            //console.log(ships[c-1].size)
            //console.log(ships[c-1].tiles)
        }

        let compareTiles = []
        for(let c=0; c<this.maxShips; c++){
            compareTiles = compareTiles.concat(ships[c].tiles)
        }
        let compareDuplicates = new Set(compareTiles).size
        // console.log(compareTiles)
        //console.log(compareTiles.length - compareDuplicates)

        if(compareTiles.length - compareDuplicates > 0){
            [ships, compareTiles] = this.generateShips()     //  FIXED  IT !!
        }

        return [ships, compareTiles]
    }


    getAvailableTiles = (shipSize) => {
        let flipped = Math.floor(Math.random()*2)
        let tilesOut = new Array(shipSize)

        if (flipped === 0) {
            let startingLocation = Math.floor(Math.random()*(101-shipSize))
            while(  !(startingLocation%10 <= (10-shipSize))  )
            {
                startingLocation = Math.floor(Math.random()*(101-shipSize))
            }
            for(let i=0; i<shipSize; i++)
            {
                tilesOut[i] = startingLocation
                startingLocation++
            }
        }
        else{
            let startingLocation = Math.floor(Math.random()*(110-shipSize*10))
            for(let i=0; i<shipSize; i++)
            {
                tilesOut[i] = startingLocation
                startingLocation+=10
            }
        }


        return tilesOut //some number array
    }


}
