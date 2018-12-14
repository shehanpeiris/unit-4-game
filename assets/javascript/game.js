// Create all of the base variables we need for the game.
var targetScore = 0;
var userScore = 0;
var gemOne = 0;
var gemTwo = 0;
var gemThree = 0;
var gemFour = 0;
var wins = 0;
var losses = 0;

// Create a function that will run after user wins/loses to reset the values of game variables.
function resetGame () {
    targetScore = "";
    userScore = "";
    gemOne = "";
    gemTwo = "";
    gemThree = "";
    gemFour = "";
    $("#target-score-text, #user-score-text").empty();
};

// Create a function to randomize a number between 1 & 12 for our gem values
function randomizeGem () {
    return Math.floor(Math.random()*12);
};

// console.log(randomizeGem());

// Create a function to randomize a number between 19 & 120 for the target score
function randomizeTarget () {
    return (Math.floor(Math.random()*102))+19;
};

// console.log(randomizeTarget());

// Create a function that will generate random values (between 1-12) for each of the gems and our random target.
var crystallize = function() {
    gemOne = randomizeGem();
    gemTwo = randomizeGem();
    gemThree = randomizeGem();
    gemFour = randomizeGem();
    targetScore = randomizeTarget();
    $("#target-score-text").text("Target Score is: " + targetScore) //Why isn't this working?
};

crystallize();
console.log("Gem 1's value: " + gemOne);
console.log("Gem 2's value: " + gemTwo);
console.log("Gem 3's value: " + gemThree);
console.log("Gem 4's value: " + gemFour);
console.log("Target Score: " + targetScore);

// Create a function that will run after user loses, increases loss count, alerts user to their loss, and re-runs the randomizer functions.
var lossFunction = function() {
    losses++;
    alert("You lost!");
    $("#loss-text").text("Losses: " + losses);
    randomTarget();
    targetScore = randomTarget();
    console.log("Target score is: " + targetScore);
};

// Create a function that will run after user wins, increases win count, alerts user to their victory, and re-runs the randomizer functions.
var winFunction = function() {
    wins++;
    alert("Congrats! You won!");
    $("#win-text").text("Wins: " + wins);
    randomTarget();
    targetScore = randomTarget();
    console.log("Target score is: " + targetScore);
};

$("#gem-pic-one").on("click", function() {
    alert("test");


})