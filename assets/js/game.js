var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {
    //Ask player if they'd like to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter either FIGHT or SKIP to choose.");
   
    //if player picks "skip" confirm and stop loop
    if(promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        //if yes leave fight
        if(confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
         //if no (false) ask question again by running fight again
        else if (confirmSkip = false) {
        fight();
        }
        else {
            window.alert("You need to choose a valid option. Try again!");
        }       
    }
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
        } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        window.alert(playerName + " has " + playerHealth + " health left.");
    

  // check player's health
  if (playerHealth <= 0) {
    window.alert("You have lost your Robot in battle! Game Over!");
    break;
    } 
}
}
};

//function to start a game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
        //pick enemy to fight
        var pickedEnemyName = enemyNames[i];
        //reset enemy health before starting a new fight
        enemyHealth = 50;
        //use debugger to pause script when needed
        //debugger;
        fight(pickedEnemyName);
        }

        else {
            window.alert("You have lost your robot in battle! Game Over!");
        }
    };
    endGame();
};

//function to end the game
var endGame = function() {
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    //ask the player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

//start game when page loads
startGame();

//Game States
//"WIN" - Player robot has defeated all enemy robots
// * Fight all enemy robots




