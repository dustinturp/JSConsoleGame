var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth)

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // alert player that the round is starting
    window.alert("Welcome to Robot Gladiators");

    // subtract value of playerAttack from enemy heath and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to console so we know  it worked.
    console.log( 
        playerName + "attacked" + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <=0) {
            window.alert (enemyName + "has been defeated!")
        }
        else {
            window.alert (enemyName + " still has " + enemyHealth + " health left.");
        }
        
    // subtract value of enemyAttack from player health and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to console so we know  it worked. 
    console.log(
        enemyName + "attacked" + playerName + ". " +playerName + " now has " + playerHealth + " health remaining."
    );

    if (playerHealth <=0) {
        window.alert (playerName + "has been defeated!")
    }
    else {
        window.alert (playerName + " still has " + playerHealth + " health left.");
    }
};

fight();