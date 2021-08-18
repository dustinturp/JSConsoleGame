

var randomNumber = function(min, max) {
  // gen number between 40 and 60
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value
}

var fight = function(enemy) {
  while (playerInfo.health > 0 && enemy.health> 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP" || promptFight == "s") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money)
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    var damage =  randomNumber(playerInfo.attack - 3, playerInfo.attack)
    enemy.health= Math.max(0, enemy.health- damage);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health+ ' health remaining.'
    );

    // check enemy's health
    if (enemy.health<= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health+ ' health left.');
    }

    // remove player's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};

var startGame = function() {
  // reset player stats
  playerInfo.reset();
  for(var i = 0; i < enemyInfo.length; ++i) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i++));
      // pick new enemy
      var pickedEnemyObj = enemyInfo[i];
      //reset enemy.healthbefore starting new fight
      pickedEnemyObj = randomNumber(40, 60);
      // debugger;
      // pass picked name variables value into fight function.
      fight(pickedEnemyObj)
      if (playerInfo.health > 0 && i < enemyInfo.length -1) {
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
  if (playerInfo.health > 0){
    window.alert("Great job, you've survived the game! You have a score of" + playerInfo.money + ".");

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
    case "h":
      playerInfo.refillHealth();
      break;
    case "upgrade":
    case "u":
    case "a":
      playerInfo.upgradeAttack();
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
       this.health += 20;
       this.money -= 7;
    }
    else {
      alert("Not enough cash!")
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
       this.attack += 6;
       this.money -= 7;
    }
    else {
      alert("Not enough cash!")
    }
  }

};

var enemyInfo = [
  {
    name: "Roberto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "robo Trumble",
    attack: randomNumber(10, 14)
  }
];


startGame();


