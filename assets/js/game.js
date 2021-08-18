var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;



var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = randomNumber(40, 60);
var enemyAttack = 12;

var randomNumber = function(min, max) {
  // gen number between 40 and 60
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value
}

var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP" || promptFight == "s") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    var damage =  randomNumber(playerAttack - 3, playerAttack)
    enemyHealth = Math.max(0, enemyHealth - damage);
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

var startGame = function() {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 11;
  for(var i = 0; i < enemyNames.length; ++i) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i++));
      // pick new enemy
      var pickedEnemyName = enemyNames[i];
      //reset enemyHealth before starting new fight
      enemyHealth = randomNumber(40, 60);
      // debugger;
      // pass picked name variables value into fight function.
      fight(pickedEnemyName)
      if (playerHealth > 0 && i < enemyNames.length -1) {
        // check if they want the store
        var storeConfirm = window.confirm("this fight is over, Visit the store?")
        // if yes thake them to the shop
        if (storeConfirm) {
          shop();
        }
      }
    }
    else {
      window.alert('You have lost your robot in battle! Game Over!');
      break;
    }
  }
  // play again
  // startGame();
  endGame();
};
  // call fight function with enemy
  // repeat as long as enemy is alive

var endGame = function() {
  if (playerHealth > 0){
    window.alert("Great job, you've survived the game! You have a score of" + playerMoney + ".");

  }
  else {
    window.alert("You've lost your robot in battle.");
  }
  window.alert("The game has now ended. Let's see how you did!");
  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");
  
  if (playAgainConfirm) {
    // restart the game
    startGame();
  } 
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function() {
  // ask what they want to do
  var shopOptionPrompt = window.prompt(
    "pick one. refill health, upgrade attack, or leave the shop"
  );
  switch (shopOptionPrompt) {
    case "refill":
    case "r":
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars");
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
      break;
    case "upgrade":
    case "u":
      if (playerMoney >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
      break;

    case "leave":
    case "l":
      window.alert("Leaving the store ");
      break;
      default:
      window.alert("You did not pick an option. Try again.")
      shop();
      break;
  }
};

startGame();


