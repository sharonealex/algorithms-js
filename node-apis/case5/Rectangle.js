const Shape = require("./Shape")

class Rectangle extends Shape {
    constructor(side1, side2){
        super(side1, side2)
        this.side1 = side1;
        this.side2 = side2
    }


}

const rec = new Rectangle(4,5);
rec.logInfo()