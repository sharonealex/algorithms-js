//base class

class Shape{
    constructor(area, perimeter){
        this.area = area;
        this.perimeter = perimeter
    }

    logInfo () {
        console.log(`area is ${this.area} and perimeter is ${this.perimeter}`)
    }
}

module.exports = Shape;