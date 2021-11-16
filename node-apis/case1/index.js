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

// Constructor function which can take in a series of values and create objects
function Character(name, type, age, strength, hitpoints) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
  }
  
  // Associates the method printStats() to the Character constructor, which prints all of the stats for a character
  Character.prototype.printStats = function () {
    console.log(
      `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
    );
    console.log('\n-------------\n');
  };
  
  // Method which determines if "hitpoints" are greater than zero and returns a boolean depending on the outcome
  Character.prototype.isAlive = function () {
    if (this.hitpoints > 0) {
      console.log(`${this.name} is still alive!`);
      console.log('\n-------------\n');
      return true;
    }
    console.log(`${this.name} has died!`);
    return false;
  };
  
  // Method which takes in a second object and decreases their "hitpoints" by this character's strength
  Character.prototype.attack = function (character2) {
    character2.hitpoints -= this.strength;
  };
  
  // Method which increases this character's stats when called
  Character.prototype.levelUp = function () {
    this.age += 1;
    this.strength += 5;
    this.hitpoints += 25;
  };
  
  const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
  const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);
  
  warrior.printStats();
  rogue.printStats();
  
  rogue.attack(warrior);
  
  warrior.printStats(); // => Crusher HitPoints: 55
  warrior.isAlive(); // => Crusher is still alive!
  
  rogue.levelUp();
  rogue.printStats(); // => Dodger HitPoints: 75

  // Promise example using a real-life promise
// The real-life promise in this scenario is a child asking his parents for a Nintendo Switch

const choresDone = true;

// Promise
const willGetSwitch = new Promise((resolve, reject) => {
  // Check for a desireable outcome, if so resolve the promise
  if (choresDone) {
    const reward = {
      name: 'Nintendo Switch',
      desired: true,
    };
    resolve(reward);

    // Otherwise reject the promise
  } else {
    const issue = new Error('Child did not finish chores as promised');
    reject(issue);
  }
});

// Another promise to call only if we get the reward
const playGames = (reward) => {
  const message = `I am playing games on my new ${reward.name}`;
  return Promise.resolve(message);
};

willGetSwitch
  .then(playGames)
  .then((resolved) => console.log(resolved))
  .catch((err) => console.error(err));

// Prompt the user to enter what they are currently doing
const userInput = process.argv[2];
console.log('Current user activity:', userInput);

// If the user does not enter anything, return an error message
if (!userInput) {
  console.error(
    '\nPlease enter your current activity\nUsage: `node index.js <activity>`'
  );
  process.exit();
}

// If the user enters anything other than the word 'coding', set 'studentDistracted' to 'true'
const studentDistracted = userInput !== 'coding';

// Refactored 'practiceCoding()' to use promises
const practiceCoding = () =>
  new Promise((resolve, reject) => {
    if (studentDistracted) {
      reject(new Error('Coding stopped - Student is distracted'));
    }
    resolve('We are coding!');
  });

// Refactor to call 'practiceCoding()' and chain a 'then()' and 'catch()'
practiceCoding()
  .then(() => console.log('We are coding in promises!'))
  .catch((err) => console.error('Promise rejected:', err));

  const apiCallDurations = [3000, 4000, 5000, 6000];
const maxDuration = 9999;

const callAPI = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // If the duration is longer than maxDuration, reject() the promise
      if (duration >= maxDuration) {
        reject(new Error(`This request timed out`));
      } else {
        // Otherwise resolve() the promise
        resolve(`Response received: ${duration}ms`);
      }
    }, duration);
  });

const promises = [];

apiCallDurations.map((duration) => promises.push(callAPI(duration)));

console.log('Promises array before the timeouts have finished: ', promises);

// Promise.all will resolve when all promises in the array have been resolved
// Promise.all will reject if any of the promises in that array was rejected
Promise.all(promises)
  .then((response) => console.log('Response from Promise.all():', response))
  .catch((err) => console.error(err));






  

