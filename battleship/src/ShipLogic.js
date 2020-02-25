
export default class ShipLogic {

    // Constants
    static get maxShips()  { return 5 }
    static get maxSize()   { return 5 }

    // Ship Object
    static get ShipBlueprint() {
        class ShipBlueprint {
            constructor(){
                this.size = 0
                this.tiles = []
                //length 0 means dead
            }
        }
        return ShipBlueprint
    }



    // Ship Logistics
    static generateShips() {
        let ships = new Array(ShipLogic.maxShips)
        for(let c=1; c<=ShipLogic.maxSize; c++){
            ships[c-1] = new ShipLogic.ShipBlueprint()
            ships[c-1].size = c
            ships[c-1].tiles = ShipLogic.getAvailableTiles(c)
        }

        let compareTiles = []
        for(let c=0; c<ShipLogic.maxShips; c++){
            compareTiles = compareTiles.concat(ships[c].tiles)
        }
        let compareDuplicates = new Set(compareTiles).size

        if(compareTiles.length - compareDuplicates > 0){
            [ships, compareTiles] = ShipLogic.generateShips()     //  FIXED  IT !!
        }
        return [ships, compareTiles]
    }


    static getAvailableTiles( shipSize ) {
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
        return tilesOut
    }
}
