// Select the button and add an event listener for the 'click' event
document.getElementById("rollButton").addEventListener("click", function() {
    // Generate a random number for player 1
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let diceImageSource1 = "./images/dice" + randomNumber1 + ".png";
    document.getElementById("leftDice").src = diceImageSource1;

    // Generate a random number for player 2
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let diceImageSource2 = "./images/dice" + randomNumber2 + ".png";
    document.getElementById("rightDice").src = diceImageSource2;

    // Compare the dice rolls and update the <h1> text accordingly
    let title = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        title.textContent = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        title.textContent = "Player 2 Wins!";
    } else {
        title.textContent = "Draw!";
    }
});
