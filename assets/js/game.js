var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//FIGHT FUNCTION
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
            playerMoney = Math.max(0, playerMoney - 10);
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
        //enemyHealth = randomNumber(40, 60);
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);
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
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        playerHealth = Math.max(0, playerHealth - damage);
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

//START GAME FUNCTION
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
        enemyHealth = randomNumber(40, 60);
        //use debugger to pause script when needed
        //debugger;
        fight(pickedEnemyName);

        if (i < enemyNames.length - 1 && playerHealth > 0) {
            //ask player if they want to shop
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            //if yes go to store
            if (storeConfirm) {
                shop();
            }
        }
        }

        else {
            window.alert("You have lost your robot in battle! Game Over!");
        }
    };
    endGame();
};

//END GAME FUNCTION
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

//shop function
var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "refill": 
        case "REFILL":
            if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
        
            //increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            break;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;

        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            //increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            break;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store");
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");

            //call shop again to force player to pick a valid option
            shop();
            break;
    }

};

//FUNCTION TO GENERATE RANDOM NUMERIC VALUE
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}

//start game when page loads
startGame();

