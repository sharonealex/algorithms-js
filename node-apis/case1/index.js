function Animal(raining, noise){
    this.raining = raining;
    this.noise = noise
    this.makeNoise = function(){
        if(this.raining == true){
            console.log(`its raining and can hear ${this.noise} `)
        }
    }
}

const dog = new Animal(true, "bow bow")
const cat = new Animal(false, "meow")

dog.makeNoise();
cat.makeNoise();

const massHysteria = (dogs, cats)=>{
    if(dogs.raining === true && cats.raining === true){
        console.log("massm syter")
    }
}

massHysteria(dog, cat)

