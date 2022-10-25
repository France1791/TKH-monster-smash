let playerHealth = 15
let monsterName = 'Muckga'
let monsterHealth = 15



let playerName = prompt(`Your name is:`)

class Fighter {
  constructor(healthPoints, attackMethod) {
    this.healthPoints = healthPoints;
    this.attackMethod = attackMethod;
  }
  attack(Fighter) {
    let attackPoints = randomNum(1,6);
    Fighter.healthPoints = Fighter.healthPoints - attackPoints;
    alert(`${this.name} attacked ${Fighter.name} and did a damage of ${attackPoints}. ${Fighter.name} has ${Fighter.healthPoints} points left`)
  }
}
class Monster extends Fighter{
  constructor(name, healthPoints, attackMethod){
    super(healthPoints, attackMethod)
    this.name = name
  }
}
myMonster = new Monster("Muckga", 15, "kick")

  class Hero extends Fighter {
    constructor(name, healthPoints, attackMethod){
    super(healthPoints, attackMethod)
    this.name = name
  }
}
myHero = new Hero(playerName, 15, "punch")

function randomNum(min, max) {
  //return a random integer between min - max
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

function playRound() {

  //use randomNum to return either 0 or 1
  let userRandom = randomNum(0, 2)
  //0 = player goes first, 1 = monster goes first
  
   if(userRandom === 0){
     myHero.attack(myMonster)
     if(myMonster.healthPoints > 0) {
       myMonster.attack(myHero)
     }
   } else if(userRandom === 1) {
     myMonster.attack(myHero)
     if(myHero.healthPoints > 0) {
      myHero.attack(myMonster)
    }
  }
}

function playGame() {
  //beginning game message
  alert(`Hello, ${myHero.name}! You are fighting ${myMonster.name}! Your health is at ${myHero.healthPoints}, ${myMonster.name}'s health is at ${myMonster.healthPoints}`
  );

 let roundNumber = 0

  while(myHero.healthPoints > 0 && myMonster.healthPoints > 0){
    roundNumber++
  
    alert(`Your number is ${roundNumber} and  ${monsterName} current health points is ${myMonster.healthPoints}`);
   //call playRound inside the while loop
    playRound()
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message 
  if(myHero.healthPoints <= 0){
    alert(`And the winner for the game is ${myMonster.name}`)
  } else if(myMonster.healthPoints <= 0) {
    alert(`And the winner for the game is ${myHero.name}`)
  }
  
}
//call playGame to start game
  playGame()


