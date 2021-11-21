const vehicle = require("./vehicle")

class Car extends vehicle{
    constructor(id, color, passengers){
        super(id,4,'beep')
        this.color = color;
        this.passengers = passengers;
    }

    useHorn(){
        console.log(this.sound)

    }

    checkPassengers(){
        if(this.passengers.length > 4){
            console.log("too many passengers pls get out")
        }else{
            console.log("more room pls come join us")
        }
    }
}

const passengers = [
    'shar', 'milli', 'tom'
]

const car = new Car(34, "blue", passengers);

console.log('---car---')
car.printInfo();
car.useHorn();
car.checkPassengers();