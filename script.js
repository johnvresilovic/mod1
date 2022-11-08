class Fighter {
        constructor(health, strength, speed, agility, intelligence, determination, endurance, skill, winFactor) {
          this.health = health;
          this.strength = strength;
          this.speed = speed;
          this.agility = agility;
          this.intelligence = intelligence;
          this.determination = determination;
          this.endurance = endurance;
          this.skill = skill;
          this.winFactor = winFactor;
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
        let winFactorValue = Math.round((strengthValue + speedValue + agilityValue + intelligenceValue + determinationValue + enduranceValue + skillValue) / 7);
        newFighter = new Fighter(healthValue, strengthValue, speedValue, agilityValue, intelligenceValue, determinationValue, enduranceValue, skillValue, winFactorValue);
      };
      
function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

let combatants = []

for (let i = 1; i < 2 + 1; i++) {
    makeFighter();
    combatants.push(newFighter);
  }

let playerOne = combatants[0]

let computerOpponent = combatants[1]

console.log(playerOne)
console.log(computerOpponent)