// Singletons are anti-patterns and we don't use them much.
// We use single instance of a class throughout our app- kind of like global state in redux- and new instances from that class cannot be created.
// Objects allow us to do the same thing in ES6.

//es5 implementation
let numberOfPizzaSlices = 4; 

class PizzaSlice{
    //if an instance already exists, throw an error
    constructor(){
        if( PizzaSlice._instance){
            return new Error ('instance already exists');
        }
        PizzaSlice._instance = this;
    }

    addSlice(){
        return numberOfPizzaSlices++;
    }

    removeSlice(){
        return numberOfPizzaSlices--;
    }

    getCurrentNumberOfSlices(){
        return numberOfPizzaSlices;
    }
}

//freezing to prevent altering properties in the object
const PizzaSliceChanger = Object.freeze(new PizzaSlice());


//es6 implementation
let numberOfPizzaSlices2 = 4; 

const PizzaSlice2 = {
    addSlice2(){
        return numberOfPizzaSlices2++;
    },

    removeSlice2(){
        return numberOfPizzaSlices2--;
    },

    getCurrentNumberOfSlices2(){
        return numberOfPizzaSlices2;
    }
}

module.exports = {PizzaSliceChanger, PizzaSlice2}

// pitfalls
// Singletons can be a pain in unit-testing as we are changing the global state of the class anywhere we are using the singleton instance.

// console.log(PizzaSliceChanger.addSlice());