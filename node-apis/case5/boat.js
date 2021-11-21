const vehicle = require("./vehicle");

class Boat extends vehicle{
    constructor(id, type, crew){
        super(id, 0 ,"boam");
        this.type = type;
        this.crew = crew
    }

    soundHorn(){
        console.log(`there is a boat coming ${this.sound}`)
    }

    crewSound(){
        this.crew.forEach((item)=>{
            console.log(`reporiting for dury ${this.item}`)
        })
    
}
}

const passengers = ['sd','sdf']

const boat1 = new Boat(4, 'sail', passengers)
boat1.crewSound();
boat1.logInfo()