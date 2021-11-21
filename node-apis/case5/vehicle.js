class Vehicle {
    constructor(id, numOfWheels, sound){
        this.id = id;
        this.numOfWheels = numOfWheels;
        this.sound = sound
    }

    logInfo(){
        console.log(`details are ${this.id} and ${this.numOfWheels} and ${this.sound}`)
    }
}

module.exports = Vehicle;