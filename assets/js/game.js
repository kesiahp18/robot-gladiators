//FUNCTION TO GENERATE RANDOM NUMERIC VALUE
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}
var playerInfo = {
name: window.prompt("What is your robot's name?"),
health: 100,
attack: 10,
money: 10,
reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
},
refillHealth: function() {
    if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
    }
    else{
        window.alert("You don't have enough money!");
    }
}, 
upgradeAttack: function() {
    if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 10;
        this.money -= 7;
    }
    else {
        window.alert("You don't have enough money!");
    }
}
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

//FIGHT FUNCTION
var fight = function(enemy) {
    //repeat and execute as long as the enemy-robot is alive
    while(enemy.health > 0 && playerInfo.health > 0) {
    //Ask player if they'd like to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter either FIGHT or SKIP to choose.");
   
    //if player picks "skip" confirm and stop loop
    if(promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        //if yes leave fight
        if(confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //subtract money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
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
        // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
        //enemy.health = randomNumber(40, 60);
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );
        // check enemy's health
        if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
        break;
        } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemy.attack variable
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
        window.alert(playerInfo.name + " has " + playerInfo.health + " health left.");
    

  // check player's health
  if (playerInfo.health <= 0) {
    window.alert("You have lost your Robot in battle! Game Over!");
    break;
    } 
}
}
};

//START GAME FUNCTION
var startGame = function() {
    // reset player stats
    playerInfo.reset();
    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
        //pick enemy to fight
        var pickedEnemyObj = enemyInfo[i];
        //reset enemy health before starting a new fight
        pickedEnemyObj.health = randomNumber(40, 60);
        //use debugger to pause script when needed
        //debugger;
        fight(pickedEnemyObj);

        if (i < enemyInfo.length - 1 && playerInfo.health > 0) {
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
            playerInfo.refillHealth();
            break;

        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack();
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

//start game when page loads
startGame();

