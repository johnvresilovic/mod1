class Fighter {
  constructor(
    health,
    strength,
    speed,
    agility,
    intelligence,
    determination,
    endurance,
    skill,
    damageFactor
  ) {
    this.health = health;
    this.strength = strength;
    this.speed = speed;
    this.agility = agility;
    this.intelligence = intelligence;
    this.determination = determination;
    this.endurance = endurance;
    this.skill = skill;
    this.damageFactor = damageFactor;
  }
}

const makeFighter = () => {
  let healthValue = 100;
  let strengthValue = randomNumber(1, 99);
  let speedValue = randomNumber(1, 99);
  let agilityValue = randomNumber(1, 99);
  let intelligenceValue = randomNumber(1, 99);
  let determinationValue = randomNumber(1, 99);
  let enduranceValue = randomNumber(1, 99);
  let skillValue = randomNumber(1, 99);
  let damageFactorValue = Math.round(
    (strengthValue +
      speedValue +
      agilityValue +
      intelligenceValue +
      determinationValue +
      enduranceValue +
      skillValue) /
      7
  );
  newFighter = new Fighter(
    healthValue,
    strengthValue,
    speedValue,
    agilityValue,
    intelligenceValue,
    determinationValue,
    enduranceValue,
    skillValue,
    damageFactorValue
  );
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let combatants = [];

for (let i = 1; i < 5 + 1; i++) {
  makeFighter();
  combatants.push(newFighter);
}

let playerOne = combatants[0];

let opponentOne = combatants[1];

let opponentTwo = combatants[2];

let opponentThree = combatants[3];

let opponentFour = combatants[4];

let currentOpponent = opponentOne;

let opponentCounter = 1;

if (opponentCounter == 1) {
  alert(
    "You are a fighter.  To win this game you must defeat four opponents in sequence.  Everyone begins with a health level of 100.  Each fight proceeds in attack-counterattack fashion until someone's health level falls below 1."
  );

  alert(
    "Your first opponent is ready.  Click Attack to begin.  Click Quit at any time to end the game.  Click Restart to begin a new game."
  );
} else {
  alert(
    "Opponent " + opponentCounter + " is ready.  Click Attack to begin."
  );
}

//This section creates the attack-counterattack mechanism.
const attackButton = document.getElementById("attack");

const quitButton = document.getElementById("quit");

const restartButton = document.getElementById("restart");

attackButton.addEventListener("click", (e) => {
  attack(playerOne, currentOpponent);
});

quitButton.addEventListener("click", (e) => {
  alert("Thanks for playing.  Goodbye.");
});

restartButton.addEventListener("click", (e) => {
  window.location.reload()
});

function attack(you, opponent) {
    if (you.damageFactor > opponent.damageFactor) {
      opponent.health = opponent.health - randomNumber(35, 45);
      if (opponent.health < 1) {
        alert("Opponent " + opponentCounter - 1 + " vanquished!")
        opponentCounter += 1
        if (opponentCounter < 5) {
          currentOpponent = combatants[opponentCounter]
          alert("Opponent " + opponentCounter + " awaits you.  Click Attack to begin.");
        }  else {
          alert("You've defeated the final opponent!  YOU WIN!!")
        }
      } else {
        alert(
          "You caused serious damage.  Opponent " + opponentCounter + "'s health is down to " + opponent.health + ".")
            alert("Brace yourself for a counterattack!");
            counterattack(opponent, you)
      }
    } else {
      opponent.health = opponent.health - randomNumber(35, 45);
      alert("You caused minor damage.  Opponent " + opponentCounter + "'s health is down to " + opponent.health + "."  );
          alert("Brace yourself for a counterattack!");
          counterattack(opponent, you)
    }
  }

  function counterattack(opponent, you) {
    if (opponent.damageFactor > you.damageFactor) {
      you.health = you.health - randomNumber(5, 15);
      if (you.health < 1) {
        alert("Aargh!  You have been vanquished.  Click Restart to play again.")
    } else {
      alert("You took serious damage.  Your health is down to " + you.health + ".");
      }
  } else {
        you.health = you.health - randomNumber(5, 15);
        alert("You took minor damage.  Your health is at " + you.health + ".");
      }  
}