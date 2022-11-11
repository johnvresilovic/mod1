This is a game called Take Your Best Shot, where the user's character (aka You) engages in simulated combat with three automated characters (Opponents 1-3) in sequence.    

I have used HTML, CSS and JavaScript to make the game. 

At the start of the game all four characters are given health values of 100 and power values that are randomly generated.  The You character gets a power value between 10 and 90, whereas the opponents get values between 10 and 60.  This owes to 1) the fact that there are three opponents for You to fight, and 2) the fact that it gives You a good chance to win, which seems advantageous for demonstration purposes.  After this project has been submitted and presented I may change the code to make the game harder to win.  Because I'm still bitter about dropping all those hard-earned quarters into arcade games I couldn't beat.  

Each fight is a series of rounds.  Each round is an attack-counterattack sequence, with You always going first.  

The outcome of every round hinges on the fighters' power values.  The fighter with the higher value causes greater reduction of the opponent's health.  If You has the greater power value, then their attacks/counterattacks reduce the opponent's health by 30 - 40 points each time; whereas the opponent's attacks/counterattacks reduce You's health by 10 - 20 points.  The fighters' health levels are updated after each round.

The rounds continue until one fighter's health falls below 1.  If You loses the fight, the game is over.  If You wins, they fight the next opponent.  If You defeats all three opponents, You wins the game.

You also has the options of restarting the game (i.e. having new power values assigned to all four fighters) and of quitting the game.

There are no installation instructions.  Simply navigate to the URL below.

The live site for this game is https://johnvresilovic.github.io/mod1/

Unsolved problems:  
1. How to use modals instead of alerts for in-game messaging. 
2. How to render the game unplayable (without restarting or refreshing the browser) after a player quits.

Contact info: johnvresilovic@protonmail.com