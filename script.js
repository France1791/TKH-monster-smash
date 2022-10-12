//global variables, can be accessed by all functions

  //declare a variable named playerName that stores the value the player enters from a prompt
  let playerName = prompt(`Your name is:`)
  //declare a variable named playerHealth and set it equal to the number value 15
  let playerHealth = 15
  //assign a name of a monster (ex 'Werewolf') as a string to a variable named monsterName
  let monsterName = 'Muckga'
  //declare a variable named monsterHealth and set it equal to the number value 15
  let monsterHealth = 15
//random integer function 
//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNum(min, max) {
  //return a random integer between min - max
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}


function playerAttack(){

//use randomNum to generate attack points value between 1 - 5 and save the value to a variable named playerAttackPoints
  let playerAttackPoints = randomNum(1, 6)
//subtract playerAttackPoints from monsterHealth and update the monsterHealth variable
  monsterHealth = monsterHealth - playerAttackPoints
  //use an alert with string template literals to tell the player: 
  // 1. player attacked monster 
  alert(`${playerName} attacked ${monsterName}`)
  // 2. how much damage the player did 

  alert(`${playerName} did a damage of ${playerAttackPoints} points.`)
  // 3. how much health the monster has 
  alert(`${monsterName} is left with ${monsterHealth} points.`)
}

function monsterAttack(){

  //use randomNum to generate attack points value between 1 - 5 and save the value to a variable named monsterAttackPoints
  let monsterAttackPoints = randomNum(1, 6)
  //subtract monsterAttackPoints from playerHealth and update the playerHealth variable 
  playerHealth = playerHealth - monsterAttackPoints
  //use an alert with string template literals to tell the player: 
  // 1. monster attacked player
  alert(`${monsterName}  attacked ${playerName}`) 
  // 2. how much damage the monster did 
  alert(`${monsterName}  did a damage of  ${monsterAttackPoints} points.`)
  // 3. how much health the player has 
  alert(`${playerName} is left with ${playerHealth} points.`)
}

function playRound() {

  //use randomNum to return either 0 or 1
  let userRandom = randomNum(0, 2)
  //0 = player goes first, 1 = monster goes first
  
  //use if/else to determine who goes first
  if(userRandom === 0){
    playerAttack()
    if(monsterHealth > 0) {
      monsterAttack()
    }
  } else if(userRandom === 1) {
    monsterAttack()
    if(playerHealth > 0) {
      playerAttack()
    }
  }
  // } else {
    // console.log("Error! number should be 0 or 1.")
  // }
  //if player goes first, run playerAttack, then if monsterHealth > 0, run monsterAttack

  //if monster goes first, run monsterAttack, then if playerHealth > 0, run playerAttack 
}

function playGame() {
  //beginning game message
  alert(`Hello, ${playerName}! You are fighting ${monsterName}! Your health is at ${playerHealth}, ${monsterName}'s health is at ${monsterHealth}`
  );

 let roundNumber = 0

  //while loop that runs until player or monster's health is <= 0 
  //add the condition in the while loop parentheses 
  while(playerHealth > 0 && monsterHealth > 0){
    roundNumber++
   //write an alert statement that tells the player what round number it is, and the player's and monster's current health points
    alert(`Your number is ${roundNumber} and  ${monsterName} current health points is ${monsterHealth}`);
   //call playRound inside the while loop
    playRound()
  }
  //outside of while loop, declare a winner and use alert to show a win or lose message 
  if(monsterHealth < playerHealth){
    alert(`And the winner for the game is ${playerName}`)
  } else {
    alert(`And the winner for the game is ${monsterName}`)
  }
  
}
//call playGame to start game
  playGame()