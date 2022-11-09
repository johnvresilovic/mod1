class Fighter {
    constructor(health, powerIndex) {
      this.health = health;
      this.powerIndex = powerIndex;
    }
  }
  
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  let combatants = [];
  
  let playerOne = new Fighter(100, randomNumber(2, 99))
  let opponentOne = new Fighter(100, randomNumber(2, 99))
  let opponentTwo = new Fighter(100, randomNumber(2, 99))
  let opponentThree = new Fighter(100, randomNumber(2, 99))
  let opponentFour = new Fighter(100, randomNumber(2, 99))

  combatants.push(playerOne, opponentOne, opponentTwo, opponentThree, opponentFour)
  
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
    if (you.powerIndex > opponent.powerIndex) {
      opponent.health = opponent.health - 37;
      if (opponent.health < 1) {
        alert("Opponent " + opponentCounter + " has been vanquished!")
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
      opponent.health = opponent.health - 23;
      alert("You caused minor damage.  Opponent " + opponentCounter + "'s health is down to " + opponent.health + "."  );
          alert("Brace yourself for a counterattack!");
          counterattack(opponent, you)
    }
  }
  
  function counterattack(opponent, you) {
    if (opponent.powerIndex > you.powerIndex) {
      you.health = you.health - 37;
      if (you.health < 1) {
        alert("Aargh!  You have been vanquished.  Click Restart to play again.")
    } else {
      alert("You took serious damage.  Your health is down to " + you.health + ".");
      }
  } else {
        you.health = you.health - 23;
        alert("You took minor damage.  Your health is at " + you.health + ".");
      }  
  }