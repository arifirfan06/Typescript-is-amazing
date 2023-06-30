class Player {
  // class field. this will auto add to constructor
  numLives = 3;
  // # is private field/property and only accessable in class
  //   # private can be added in constructor or methods
  #score = 0;

//   static belong to class not the indivdual i.e playerX, player1, p2, etc
static hobby = 'Gamer'
// run this with Player.altPlayer()
static altPlayer() {
    return new Player('Groron', 'Smith')
}
  // constructor will run automatically
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#privSecret()
    // this.#number = number
  }
  attack() {
    console.log("brrrr");
  }
  setScore(newScore) {
    this.#score = newScore;
  }
  #privSecret() {
    console.log('accessed?')
  }
//   getter. this is just property i.e playerX.fullName without parentheses ()
get fullName() {
    return `${this.first} ${this.last}`
}
// this make accessing private field easier
get score() {
    return this.#score
}
// setter to manage value logically must same name with the field
set score(newSc) {
    if(newSc < 0) {
        throw new Error('#Score must be positive')
    }
    this.#score = newSc
}
set fullName(value) {
    const [first, last] = value.split(" ")
    this.first = first,
    this.last = last
}
}

class SuperPlayer extends Player {
    constructor(first, last, skills) {
        // super send data to Player constructor
        super(first, last)
        this.skills = skills
    }
    attack = 9999999
}

const maxedStats = new SuperPlayer('Goody', 'Roro', ['heal', 'hellfire'])

const playerX = new Player("brew", "coffee");
// playerX.setScore(18);
// get
// playerX.score
// playerX.score = 123
// playerX.score = -999
playerX.fullName = "bert"
console.log(playerX);
playerX.attack();
// playerX.#score = -11
