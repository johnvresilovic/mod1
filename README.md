This project will be a game called Battle, where a user's randomly generated character "fights" another randomly generated character.    

This README file will contain explanations of the technologies used and the approach taken, as well as a link to the live site, installation instructions, a list of unsolved problems, etc.

I'll use HTML, CSS and JavaScript to make the game.  

My approach:  At the start of a game five characters are generated: Player One (representing the user) and four opponents.  Each character has a health level of 100 and a power index (randomly generated) somewhere between 1 and 99.  Player One fights each opponent in turn.  Every fight begins with Player One attacking the opponent, followed by the opponent counterattacking.  Each attack or counterattack lowers the health level of the target.  If the attacker's power index is greater than the target's, the reduction in health level is between 35 and 45 points.  Otherwise, the reduction is between 15 and 25 points. 

The attack-counterattack sequences continue until one player's health falls below 1.  If Player One loses the fight, the game is over.  If Player One wins, Player One fights the next opponent.  If Player One defeats all four opponents, the user wins the game.

The live site for this game is: https://https://johnvresilovic.github.io/mod1

