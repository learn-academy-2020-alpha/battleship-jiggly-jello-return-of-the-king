


///*******************************************************************************************///

TestClassCONSTS = {
    dude: 5
}

class TestClass {

    constructor(){
        console.log("Here")
        console.log(TestClassCONSTS.dude)
    }

    myFunc(){
        console.log(TestClass.fur)
    }

}

/*
TestClass.fur = 12

var A = new TestClass()

A.myFunc()
*/

///*******************************************************************************************///

//   Constants in a class

class Fun{



    static burp(){
        console.log("burp")
    }

    static get burn(){
        return 52
    }


    // Declaring constants in a row:

    static get SIZE()       {   return 5   }
    static get PENS()       {   return { length:5, sharpness:6, drawWidth: 1.3 }   }
    static get MAX_SHIPS()  {   return 25   }
    static get PHRASE()     {   return "Hello World"   }


    // Local Methods

    doSomething(){
        console.log( Fun.PENS )
    }

}


/*
Fun.bird = () =>{
    console.log("Dude")
}

let B = new Fun()
B.doSomething()
Fun.bird()
Fun.burp()

console.log( Fun.burn )
*/


///*******************************************************************************************///



class ShipDock {

    constructor(){
        this.maxShips = 5
        this.maxSize = 5
        function ShipBlueprint() {
            this.size = 0
            this.tiles = []
        }
        this.Ship = new ShipBlueprint()
    }

    getShip(){
        //let aaa = new ShipBlueprint()
        return Object.create(this.Ship)
    }


    static get Bubba(){
        return class Bubba{

            // Does not activate the 'constructor'
            constuctor(){
                console.log("Bubba")
            }
        }
    }

    // static Bubba = class Bubba{
    //
    // }



// Does not work
/*
    static ShipBlueprint(){
        this.size = 0
        this.tiles = []
    }
*/
}



// let C = new ShipDock()
//
// console.log(C)
// console.log(C.getShip())

//let D = new ShipDock.ShipBlueprint
//console.log(D)


let E = ShipDock.Bubba
console.log(E)

let F = new ShipDock.Bubba
console.log(F.foot)




























/// EOF
