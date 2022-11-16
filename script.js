function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class Hero {
  constructor(health, power) {
    this.health = health;
    this.power = power;
  }
}

const playerOne = new Hero(100, randomNumber(10, 90));

class Opponent {
  constructor(health, power) {
    this.health = health;
    this.power = power;
  }
}

const makeOpponent = () => {
  let healthValue = 100;
  let powerValue = randomNumber(10, 60);
  newOpponent = new Opponent(healthValue, powerValue);
};

let combatants = [];

for (let i = 1; i < 4 + 1; i++) {
  makeOpponent();
  combatants.push(newOpponent);
}

let currentOpponent = combatants[0];

let opponentCounter = 1;

if (opponentCounter == 1) {
  alert(
    "You are a fighter.  To win this game you must defeat three opponents in sequence.  All contestants begin with a health level of 100.  Each fight proceeds in attack-counterattack fashion until someone's health level falls below 1."
  );
  alert(
    "Your first opponent is ready.  Click Attack to begin.  Click Quit at any time to end the game.  Click Restart to begin a new game."
  );
} else {
  alert("Opponent " + opponentCounter + " is ready.  Click Attack to begin.");
}

let newPlayerHealth = document.getElementById("player-stats");

let newOpponentName = document.getElementById("opponent-name");

let newOpponentHealth = document.getElementById("opponent-stats");

let messageBoard = document.getElementById("message-board");

let quitCounter = 0;

const attackButton = document.getElementById("attack");

const quitButton = document.getElementById("quit");

const restartButton = document.getElementById("restart");

attackButton.addEventListener("click", (e) => {
  if (quitCounter == 0) {
    attack(playerOne, currentOpponent);
  } else {
    alert("Press Restart to play again.");
  }
});

quitButton.addEventListener("click", (e) => {
  alert("Thanks for playing!  Goodbye.");
  quitCounter = 1;
  attackButton.style.color = "gray";
  attackButton.style.cursor = "default";
});

restartButton.addEventListener("click", (e) => {
  window.location.reload();
});

function attack(you, opponent) {
  if (you.power >= opponent.power) {
    let healthLoss = randomNumber(30, 40);
    opponent.health -= healthLoss;
    newOpponentHealth.innerHTML = "Health: " + opponent.health;
    if (opponent.health < 1) {
      alert("Nice job!  Opponent " + opponentCounter + " has been defeated!");
      opponentCounter += 1;
      if (opponentCounter < 4) {
        currentOpponent = combatants[opponentCounter];
        alert(
          "Opponent " + opponentCounter + " awaits you.  Click Attack to begin."
        );
        newOpponentName.innerHTML = "Opponent " + opponentCounter;
        newOpponentHealth.innerHTML = "Health: 100";
      } else {
        alert("You've beaten the final opponent!");
        quitCounter = 1;
        messageBoard.innerHTML = "YOU WIN";
        newOpponentHealth.innerHTML = "Health: XXX";
        attackButton.style.color = "gray";
        attackButton.style.cursor = "not-allowed";
      }
    } else {
      alert(
        "You caused serious damage.  Opponent " +
          opponentCounter +
          "'s health is down to " +
          opponent.health +
          ".  Now brace yourself for a counterattack!"
      );
      counterattack(opponent, you);
    }
  } else {
    let healthLoss = randomNumber(10, 20);
    opponent.health -= healthLoss;
    newOpponentHealth.innerHTML = "Health: " + opponent.health;
    if (opponent.health < 1) {
      alert("Nice job!  Opponent " + opponentCounter + " has been defeated!");
      opponentCounter += 1;
      if (opponentCounter < 4) {
        currentOpponent = combatants[opponentCounter];
        alert(
          "Opponent " + opponentCounter + " awaits you.  Click Attack to begin."
        );
        newOpponentName.innerHTML = "Opponent " + opponentCounter;
        newOpponentHealth.innerHTML = "Health: 100";
      } else {
        alert("You've beaten the final opponent!");
        messageBoard.innerHTML = "YOU WIN";
        quitCounter = 1;
        newOpponentHealth.innerHTML = "Health: XXX";
        attackButton.style.color = "gray";
        attackButton.style.cursor = "not-allowed";
      }
    } else {
      alert(
        "You caused minor damage.  Opponent " +
          opponentCounter +
          "'s health is down to " +
          opponent.health +
          ".  Now brace yourself for a counterattack!"
      );
      counterattack(opponent, you);
    }
  }
}

function counterattack(opponent, you) {
  if (opponent.power > you.power) {
    let healthLoss = randomNumber(30, 40);
    you.health -= healthLoss;
    newPlayerHealth.innerHTML = "Health: " + you.health;
    if (you.health < 1) {
      alert("Aargh!  You have been defeated.  Click Restart to play again.");
      attackButton.style.color = "gray";
      attackButton.style.cursor = "not-allowed";
    } else {
      alert(
        "You took serious damage.  Your health is down to " +
          you.health +
          ".  Launch your next attack!"
      );
    }
  } else {
    let healthLoss = randomNumber(10, 20);
    you.health -= healthLoss;
    newPlayerHealth.innerHTML = "Health: " + you.health;
    if (you.health < 1) {
      alert("Aargh!  You have been defeated.  Click Restart to play again.");
      attackButton.style.color = "gray";
      attackButton.style.cursor = "not-allowed";
    } else {
      alert(
        "You took minor damage.  Your health is at " +
          you.health +
          ".  Launch your next attack!"
      );
    }
  }
}
